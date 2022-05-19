#!/bin/bash  
demo_name=$1
project_name=ibmtechzone-demo-artifacts 
github_url=https://github.com/IBM/ibmtechzone-demo-artifacts
cd /projects/techzone-demo/sandbox
rm -rf /projects/techzone-demo/sandbox/$project_name
git clone --sparse $github_url
cd /projects/techzone-demo/sandbox/$project_name
git sparse-checkout set $demo_name
# cd /projects/techzone-demo/sandbox/

if [ -d "$demo_name" ]; then
  # Control will enter here if $DIRECTORY doesn't exist.
    echo "DemoName Found!"
    cp -a /projects/techzone-demo/sandbox/$project_name/$demo_name/. /projects/techzone-demo/sandbox/
    rm -rf /projects/techzone-demo/sandbox/$project_name
    echo "Files loaded successfully!"
    exit 2
fi
echo "File loading failed!"
rm -rf /projects/techzone-demo/sandbox/$project_name
