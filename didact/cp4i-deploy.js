let configureCommand = "git clone https://github.com/IBM/CPDemoFramework -b ${BRANCH} --single-branch ${CHE_PROJECTS_ROOT}/techzone-demo;cd ${CHE_PROJECTS_ROOT}/techzone-demo/olm-utils-v2;sh configure-env.sh ";

currentHTMLstateData = {
  prerequisites: {
    server: "",
    api_token: "",
    kubeadmin_user: "",
    kubeadmin_pass: "",
    icr_key: "",
    "oc_login":""
  },
  authenticationOptions: {
    required: ["icr_key"],
    additionalOptions: {
      "server_option": ["server","api_token"],
      "kube_option": ["server","kubeadmin_user", "kubeadmin_pass"],
      "oc_option": ["oc_login"]
    },
  },
  validPrerequisites: [["icr_key","oc_login"],["icr_key", "server", "api_token"], ["icr_key", "server", "kubeadmin_user", "kubeadmin_pass"]],
  dropdownIds: ["service-list"],
  envConfigured: false,
  selectedServices: [],
  doNotRestore: []
}

const services = {
  "platform-navigator": "Platform Navigator",
  "api-management": "API Management",
  "automation-assets": "Automation Assets",
  "enterprise-gateway": "Enterprise Gateway",
  "event-endpoint-management": "Event Endpoint Management",
  "event-streams": "Event Steam",
  "high-speed-transfer-server": "High Speed Transfer Server",
  "integration-dashboard": "Integration Dashboard",
  "integration-design": "Integration Design",
  "integration-tracing": "Integration tracing",
  "messaging": "Messaging"
}

function funcLoad(){
  // Disable timeline
  disableTimelineFromElement("all");

  //handle prerequisites
  for (let prerequisite of Object.keys(currentHTMLstateData.prerequisites)) {
    addEventListenerToElement(document.getElementById(prerequisite), "input", handlePrerequisiteValues);
  }

  //handle authencation options
  [...document.getElementsByName("authentication-options")].forEach(element => addEventListenerToElement(element, "change", handleAuthenticationOptions))

  addEventListenerToElement(document.getElementById("oc_login"),"input", handleOCLogin)

  //generate config command
  addEventListenerToElement(document.getElementById("configure-env"), "click", updateConfigVars);

  //After env configured successfully enable timeline
  addEventListenerToElement(document.getElementById("enable-timeline"), "click", enableAll)

  //open/close logic for all dropdowns
  toggleDropdowns(currentHTMLstateData.dropdownIds)

  //create services dropdown
  createMultiSelectDropdownWithSearch("git-services", services, updateSelectedServices, "services", "services-search", filterServiceList)

  addEventListenerToElement(document.getElementById("install_cpd"), "click", install_cpd);

  addEventListenerToElement(document.getElementById("storage_value"), "change", () => { })

  //Store required CTAs in state
  storeCTAInState();

  //Restore data if available
  document.getElementById("get-workspace-state").click();

  //reset workspace state
  addEventListenerToElement(document.getElementById("reset-href"), "click", resetWorkspace);
}

function updateConfigVars(e){
  document.getElementById("configure-env$1").setAttribute("command", `${configureCommand}${Object.keys(currentHTMLstateData.prerequisites).map(val => `${currentHTMLstateData.prerequisites[val] || "\"\""}`).toString().replaceAll(",", "%20")}`);
  document.getElementById("configure-env$1").click();
}

function install_cpd(){
  let cp4iVersion = document.getElementById('cp4i_version').value;
  let cp4iAdminPassword = document.getElementById('cp4i_admin_password').value
  let cp4iEnvName = document.getElementById('cp4i_env_name').value
  let component_list = currentHTMLstateData.selectedServices.toString()
  if (!component_list) {
    component_list = "null"
  }
  let storage = "auto"//document.getElementById("storage_value").value;
  document.getElementById("install_cpd$1").setAttribute("command", "cd ${CHE_PROJECTS_ROOT}"+`/techzone-demo/olm-utils-v2/;pip3.8 install PyYAML;python3.8 updateYaml.py  ${component_list} ${storage} ${cp4iVersion} cp4i; bash deploy.sh cp4i ${cp4iAdminPassword} ${cp4iEnvName}`)
  document.getElementById("install_cpd$1").click();
}

function updateSelectedServices(e){
  let gitServicesList = document.getElementById("git-services");
  let gitServices = document.getElementsByName("services");
  if (e.target.checked) {
    currentHTMLstateData.selectedServices.indexOf(e.target.value) == -1 && currentHTMLstateData.selectedServices.push(e.target.value)
    gitServicesList.insertBefore(e.target.parentElement, gitServicesList.firstChild);
  } else {
    currentHTMLstateData.selectedServices.indexOf(e.target.value) !== -1 && currentHTMLstateData.selectedServices.splice(currentHTMLstateData.selectedServices.indexOf(e.target.value), 1)
    gitServicesList.insertBefore(e.target.parentElement, gitServices[Object.keys(services).indexOf(e.target.value)].parentElement);
  }
  let showSeleted = document.getElementById("selected-services")
  showSeleted.textContent = currentHTMLstateData.selectedServices.toString().replaceAll(",", ", ")
  document.getElementById("selected-components-string").textContent = getShortenedString(currentHTMLstateData.selectedServices) || "Select Components";
}

function filterServiceList(e){
  let filteredServices = {}
  let htmlServices = document.getElementsByName("services")
  let listServices = [...htmlServices].map(service => service.value)
  listServices.forEach((res, idx) => {
    if (res.toLowerCase().includes(e.target.value.toLowerCase()) || services[res].toLowerCase().includes(e.target.value.toLowerCase())) {
      filteredServices[res] = services[res]
      htmlServices[idx].parentElement.style.display = "block"
    } else {
      htmlServices[idx].parentElement.style.display = "none"
    }
  })
}

window.addEventListener("load", funcLoad);