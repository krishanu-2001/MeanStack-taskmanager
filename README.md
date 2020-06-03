# MeanStack-taskmanager
Made for hackerearth hackathon  
team - BothEnds
<hr>  

# Prerequisites  
      mongoDB configured on your system
      npm v-6.9.0(pls check compatibility)
      Angular CLI: 8.3.21(pls check compatibility)
      Node: 10.16.3
      OS: win32 x64
      Angular:
      ...

      Package                      Version
      ------------------------------------------------------
      @angular-devkit/architect    0.803.21
      @angular-devkit/core         8.3.21
      @angular-devkit/schematics   8.3.21
      @schematics/angular          8.3.21
      @schematics/update           0.803.21
      rxjs                         6.4.0

#  Steps To Run  

  git clone "..."
      
  open cmd / nodejs cmd  
  
      cd project
      cd contactlist
      npm install
      node index.js
        
        
  open another cmd / nodejs cmd  
  
      cd project
      cd contactlist
      cd client
      npm install
      ng serve (--port "...", if required)
      
 voila! It's on!

## Some helpful commands  
Updating the angular node version  
To update the angular node version, run the following commands in your terminal.

To update angular-CLI package:  

             npm uninstall -g angular-cli  
             npm install -g @angular/cli@latest

To update the local project version:  

             rm -rf node_modules(optional)  
             npm uninstall --save-dev angular-cli  
             npm install --save-dev @angular/cli@latest  
             npm install
 
