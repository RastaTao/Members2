directory.setLoginListener('userLogin',"Admin");
directory.setLoginListener('userLogin',"Organisation");
directory.setLoginListener('userLogin',"User");
addHttpRequestHandler(
'/importPersonal', 
'Modules/import.js', 
'doImportEmpsAndComps' 
);
//addHttpRequestHandler("^/cors/", "utils/cors.js",  "handleCORSMethod");