# MeanStack-taskmanager
Made for hackerearth hackathon  
team - BothEnds
<hr>  

![altimage1.png](https://github.com/krishanu-2001/MeanStack-taskmanager/blob/master/photo/p2_allfeatures.png)

# Prerequisites  
      mongoDB configured on your system
      Angular CLI: 9.1.7(pls check compatibility)
      Node: 12.17.1
      Npm: 6.14.4 
      OS: win32 x64

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
 go to localhost:4200
  
<br>
<br>
<hr>  

## Some helpful commands  


To install mongodb:
  
             install mongodb MSI installer from [https://www.mongodb.com/download-center/community?tck=docs_server]
             install with default settings  
             then open cmd
             $ cd C:\  
             $ mkdir data
             $ cd data
             $ mkdir db
             $ cd db 
             $ "C:\Program Files\MongoDB\Server\4.2\bin\mongod.exe" --dbpath="c:\data\db"  
             
To install node js:  

            install from here [https://nodejs.org/en/download/]             
            install with default settings

To update angular-CLI package:  

             npm uninstall -g angular-cli  
             npm install -g @angular/cli@latest

To update the local project version:  

             npm outdated
             npm upgrade     
               
Using Ngrok:  for demos

             cmd1 just ng serve 
             cmd2 ngrok http 4200 -host-header="localhost:4200"

