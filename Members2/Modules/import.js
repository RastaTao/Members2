//var log = "Count employees-before: " + ds.Personal.length + ", Count companies-before: " + ds.Personal.length;

// Main function
function doImportEmpsAndComps () {
     /*   The doc. to import is in the solution folder, in a subfolder
         named "Import". We load the full document in one shot  (loadText) 
         and split it in an array (one line = one element).
     */
     debugger;
      var lines = loadText( ds.getModelFolder().path + "DataFolder/Import/members.txt" ).split("\n");
       /*   Declare the variable that will hold the columns of each line.
           We know the columns will be:
            columns[0]   Name of the company
            columns[1]   Last name of the employee
            columns[2]   First name
            columns[3]   Salary
     */ 
   var columns = [];
   var com = currentSession();
   var company = com.user.fullName;
       // Now, loop for each entry in the array  
lines.forEach( function(oneLine) {  
      // Get the columns for current line  
columns = oneLine.split(",");  
 
      // Get the company. Create it if needed.
      var theComp = ds.Organisation.find("name = :1", company);
      if(theComp == null) { // Not found => create it
         alert("Organisation error!");
           }    
      // Get the employee. Create it if needed. 
       var theEmp = ds.Member.find("phone = :1 and orgName == :2", columns[2], company);
      if(theEmp == null) {
         theEmp = new ds.Member( {
            lastName    : columns[0],
            firstName    : columns[1],
            phone   : columns[2],
            organisation   : theComp
             }); 
             
             theEmp.save();
             theCard = new ds.Card ({
             
             membership : theEmp,
             organisation : theComp,
             paid : true,
             validDate : columns[3]
             
             });
             theCard.save();
         theComp.currMebmers = theComp.currMebmers+1;
         theComp.save();
      } 
        
     });
 }