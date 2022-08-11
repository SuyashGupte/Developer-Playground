<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="$$rootcsspath$$"> 
    <style>
        .header {
            background-image: url("https://raw.githubusercontent.com/IBM/Developer-Playground/master/didact/images/video_insights.jpeg");
        }
    </style>
</head>
<body>
    <div style="margin-top:2rem"></div>
    <div id="workspaceID" class="hidden-state">$workspace_id</div>
    <div id="userID" class="hidden-state">$user_id</div>
    <div id="environment" class="hidden-state">$environment</div>
    <div class="header">
        <div class="left-content">
            <div class="apptitle">Save/Share demo assets with community</div>
            <div class="subheading">Save demo artifacts to a centralized location (Shared GitHub repository). This will
                enable you to recreate your demo assets onto a different/new infrastructure (potentially on a newer
                version of Cloud Pak for Data). The centralized collection of demo assets can be leveraged by the
                broader community so we all benefit from each others work.</div>
        </div>
    </div>
    <div class="section">
        <p style="font-size:24px">Pre-requisites</p>
        <div>
            <p>Enter your CPD cluster details.</p>
            <div class="env-config">
                <label>Hostname: </label><input class="env-variables" name="hostname" type="text" id="hostname"/>
                <label>User: </label><input class="env-variables" name="wkcuser" type="text" id="username"/>
                <label>Password: </label><input class="env-variables" name="password" type="password" id="password"/>
                <label>API Key: </label><input class="env-variables" name="api_key" type="text" id="apikey"/>
            </div>
        </div>
    </div>
    <div class="section">
        <p style="font-size:24px">Instructions</p>
        <p>Please follow all the below steps in proper sequence.</p>
    </div>
    <div class="timeline-container">
        <div class="timeline timelinestep">
            <div class="content">
                <p>Configure the environment with the required resources and connect to the specified CPD cluster.</p>
            </div>
            <button class="button is-dark is-medium" id="configure-env" title="Configure Resources" action="senddata" successmessage="clone" terminalName="sandbox" 
            command="cd%20${CHE_PROJECTS_ROOT} && git clone -b development https://github.com/IBM/CPDemoFramework ${CHE_PROJECTS_ROOT}/techzone-demo;pip3.8%20install%20-r%20requirements.txt%3Bcd%20%2Fprojects%2Ftechzone-demo%2Fsandbox%2F%3Bpython3.8%20update-env.py%20">Configure Environment</button>
            <button  class="button is-dark is-medium" title="Get Data from API" action="getdata">Get data</button>
           <span class="dot"></span>
            <div id="message">Output</div>
        </div>
        <div class="timeline timelinestep">
            <div class="content">
                <p>Select the required tasks</p>
                <div class="checkbox-group">
                    <div style="float:left;padding: 0.2rem;flex: 1 1 31%;">
                        <input type="checkbox" name="checkboxtask" value="task1" />
                        <label for="task1">User Management</label>
                    </div>
                    <div style="float:left;padding: 0.2rem;flex: 1 1 31%;">
                        <input type="checkbox" name="checkboxtask" value="task2" />
                        <label for="task2">Governance Artifacts</label>
                    </div>
                    <div style="float:left;padding: 0.2rem;flex: 1 1 31%;">
                        <input type="checkbox" name="checkboxtask" value="task3" />
                        <label for="task3">Project Management</label>
                    </div>
                </div>
                <span class="dot"></span>
            </div>
        </div>
        <div class="timeline" id="task1">
            <div class="content">
                <details>
                    <summary>User management<span class="arrow"></span></summary>
                    <br><br>
                    <div class="content">
                        <p>Export Users from the specified CPD cluster.</p>
                    <button class="button is-dark is-medium" title="Export User List" successmessage="" terminalName="sandbox" 
                        command="cd /projects/techzone-demo/sandbox/;python3.8 exportUsersv2.py users.csv">Export
                        User List</button>
                    </div>
                    <div class="content">
                      <p></p>
                  </div>
                    <span class="dot"></span>
                </details>
            </div>
            <span class="dot"></span>
        </div>
        <div class="timeline" id="task2">
            <div class="content">
                <details>
                    <summary>Governance Artifacts<span class="arrow"></span></summary>
                    <br><br>
                    <div class="content">
                        <p>Select the required Governance artifacts. By default all artifacts will be exported.</p>
                        <div id="list1" class="dropdown-check-list" tabindex="100">
                            <span class="anchor">Select Artifacts</span>
                            <ul class="items">
                                <li><input type="checkbox" name="governance-artifacts" value="all" checked />All </li>
                                <li><input type="checkbox" name="governance-artifacts" value="category" />Category
                                </li>
                                <li><input type="checkbox" name="governance-artifacts"
                                        value="classification" />Classification
                                </li>
                                <li><input type="checkbox" name="governance-artifacts" value="data_class" />Data
                                    Class
                                </li>
                                <li><input type="checkbox" name="governance-artifacts" value="glossary_term" />Glossary
                                    Terms
                                </li>
                                <li><input type="checkbox" name="governance-artifacts" value="policy" />Policy
                                </li>
                                <li><input type="checkbox" name="governance-artifacts"
                                        value="reference_data" />Reference Data
                                </li>
                                <li><input type="checkbox" name="governance-artifacts" value="rule" />Rule</label>
                                </li>
                            </ul>
                        </div>
                        <p style="margin-top:1rem;"><b>Selected Artifacts: </b><span id="selected">all</span></p>
                    </div>
                    <br>
                    <div id="export-task">
                        <div class="content">
                            <p>Export the selected Governance Artifacts.</p>
                        </div>
                        <button class="button is-dark is-medium" title="Export Governance Artifacts" successmessage="" terminalName="sandbox" 
                            command="cd /projects/techzone-demo/sandbox/;python3.8 exportGovArtifacts.py governance_artifacts.zip all;unzip governance_artifacts.zip -d governance_artifacts;python3.8 exportDataProtectionRules.py data_protection_rules.json">Export
                            Artifacts</button>
                        <span class="dot"></span>
                    </div>
                </details>
            </div>
            <span class="dot"></span>
        </div>
        <div class="timeline" id="task3">
            <div class="content">
                <details>
                    <summary>Project management<span class="arrow"></span></summary>
                    <br><br>
                    <div>
                        <div class="content">
                            <p>Click the action and select the project to be exported using the terminal below.</p>
                        </div>
                        <div class="custom-select" width="100px;" style="margin:5px;">
                          <select id="sel">
                            <option>-- Select project--</option>
                          </select>
                        <button class="button is-dark is-medium" title="Export Project"
                            command="cd /projects/techzone-demo/sandbox/;python3.8 exportProject.py project_assets.zip">Export
                            Project</button>
                          </div>
                        <span class="dot"></span>
                    </div>
                </details>
            </div>
            <span class="dot"></span>
        </div>
        <div class="timeline">
            <div class="content">
                <details>
                    <summary>Publish Demo Asset to centralised repository.<span class="arrow"></span></summary>
                    <br><br>
                    <div class="content">
                        <!-- <p>Select the action to perform in the configured cp4d instance</p> -->
                        <div class="env-config">
                            <label>Demo Name*</label>
                            <input type="text" id="demoname">
                            <label>Industry*</label>
                            <!--<input type="text" id="industry">-->
                            <div id="industry-list" class="dropdown-check-list" tabindex="100">
                                <span id="selected-industry" class="anchor">Select Industry</span>
                                <ul class="items">
                                    <li>Banking and financial services</li>
                                    <li>E-commerce</li>
                                    <li>Healthcare</li>
                                    <li>Hospitality</li>
                                    <li>Insurance</li>
                                    <li>Retail</li>
                                    <li>Software</li>
                                    <li>Telecommunications</li>
                                    <li>Transportation</li>
                                    <li>Utilities</li>
                                    <li>Other</li>
                                    </select>
                                </ul>
                            </div>
                            <label>Tags(comma separated)*</label>
                            <input type="text" id="tags">
                            <label>Author*</label>
                            <input type="text" id="author">
                            <label>Description</label>
                            <input type="text" id="desc">
                            <label>Services*</label>
                            <!--<input type="text" id="services">-->
                            <div id="service-list" class="dropdown-check-list" tabindex="100">
                                <span class="anchor">Select Services</span>
                                <div class="items">
                                    <input id="services-search" type="search" placeholder="Search services"
                                        style="width: 100%" />
                                    <ul id="git-services">
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <p style="margin-top:1rem;"><b>Selected Services: </b><span id="selected-services"></span></p>
                    </div>
                    <button class="button is-dark is-medium no-click disable" title="Push to github" id="pushToGit">Publish</button>
            </div>
            <span class="dot"></span>
        </div>
    </div>
    </div>
    <a id="command_exec" ,href=""></a>
    </div>
</body>
<script>
window.onload = function funLoad() {

    const vscode = acquireVsCodeApi();
    let inputFields = {};
    window.addEventListener('message', event => {
      const receivedOutput = event.data; // The JSON data our extension sent
      switch (receivedOutput.command) {
        case 'refactor':
          document.querySelector('[id="message"]').innerHTML = receivedOutput.message;
          break;
        case 'receivedata':
          //document.querySelector('[id="message"]').innerHTML = message.message;
          var ele = document.getElementById('sel');
          for (var i = 0; i < receivedOutput.outputData.resources.length; i++) {
              // POPULATE SELECT ELEMENT WITH JSON.
              ele.innerHTML = ele.innerHTML +
                  '<option value="' + receivedOutput.outputData.resources[i].entity.name + '">' +receivedOutput.outputData.resources[i].entity.name+ '</option>';
          }
          break;
      }
    });

    document.querySelector("body").addEventListener('click', function (e) {
      var anchor = e.target.closest('button');
      if (anchor !== null) {
        var action = anchor.getAttribute("action");
        var command = anchor.getAttribute("command");
        var terminalName = anchor.getAttribute("termianlName");
        inputFields["hostName"] = document.getElementById('hostname').value;
        inputFields["userName"] = document.getElementById('username').value;
        inputFields["password"] = document.getElementById('password').value;
        inputFields["apikey"] = document.getElementById('apikey').value;
        if(action=="getdata")
        {
            vscode.postMessage({
              command: 'getdata',
              inputFields : inputFields
            });
        }
        else{

          vscode.postMessage({
              command: 'sendcommand',
              terminalName: terminalName,
              text: command,
              inputFields : inputFields
          });
        }
      }
    }, false);

};

</script>
</html>
