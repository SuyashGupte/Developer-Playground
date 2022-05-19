<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
   <script src="olm-utils.js">
  </script>

  <style>
    html,
    div,
    body {
      background-color: #1a1a1a;
      font-family: "IBM Plex Sans", sans-serif;
      font-size: 16px;
      outline: none;
    }
    body {
      font-family: Helvetica, sans-serif;
    }
    /* The actual timeline (the vertical ruler) */
    .timeline {
      position: relative;
      max-width: 1200px;
      margin: 0 auto;
      margin-left: 50px;
    }
    .content p {
      margin: 0px;
    }
    .content .afterbutton {
      padding-top: 16px;
    }
    /* The actual timeline (the vertical ruler) */
    .timeline::after {
      content: "";
      position: absolute;
      width: 1px;
      background-color: white;
      top: 15px;
      bottom: -6px;
      left: 18px;
      margin-left: -2px;
    }
    /* Container around content */
    .container {
      padding: 0px 0px;
      width: 100%;
      align-content: left;
      margin: 0px 0px 0px 0px;
      margin-left: 25px;
      margin-top: 32px;
    }
    /* The circles on the timeline */
    .container::after {
      content: "";
      position: absolute;
      width: 10px;
      height: 10px;
      right: -6px;
      background-color: white;
      border: 0px solid #ff9f55;
      top: 15px;
      border-radius: 50%;
      z-index: 1;
      margin: 0px 0px 0px 0px;
    }
    /* The circles on the timeline */
    /* Place the container to the left */
    .left {
      left: 0px;
    }
    /* Place the container to the right */
    .right {
      left: 0px;
    }
    /* Add arrows to the left container (pointing right) */
    .left::before {
      content: " ";
      height: 0;
      top: 22px;
      width: 0;
      z-index: 1;
      right: 30px;
      border: medium solid white;
      border-width: 10px 0 10px 10px;
      border-color: transparent transparent transparent white;
    }
    /* Fix the circle for containers on the right side */
    .right::after {
      left: -13px;
    }
    /* The actual content */
    .content {
      padding: 5px 10px;
      color: white;
      background: transparent;
    }
    .button.is-dark.is-medium {
      font-family: "IBM Plex Sans", sans-serif;
      background: transparent;
      border-color: white;
      color: #fff;
      border: 1px solid white;
      padding: 10px;
      padding-left: 20px;
      margin-bottom: 13px;
      border-radius: 0px;
      min-width: 180px;
      font-size: 14px;
      text-align: left;
      min-height: 48px;
      margin: 0px;
      justify-content: left;
    }
    .button.is-dark.is-medium:hover {
      font-family: "IBM Plex Sans", sans-serif;
      background-color: #2a67f5;
      border-color: white;
      color: #fff;
      text-decoration: none;
    }
    .footer {
      display: flex;
      background-color: #343a3e;
      margin-top: 20px;
      padding: 0px;
      max-width: 1200px;
    }
    .github-icon {
      min-height: 100%;
      min-width: 100%;
      object-fit: cover;
      object-position: 250% 100px;
      opacity: 15%;
      bottom: 15px;
    }
    .image-content {
      padding: 5px 10px;
      background: transparent;
      color: black;
      position: absolute;
      font-size: 27px;
    }
    .image-div {
      position: relative;
      background-color: white;
      min-width: 50%;
      background-image: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)),
        url("https://raw.githubusercontent.com/IBM/Developer-Playground/master/didact/images/github.svg");
      background-position: -50% 60px;
      background-repeat: no-repeat;
      padding-top: 20px;
      padding-left: 20px;
    }
    .image-btn {
      position: absolute;
      right: 0;
      bottom: 0%;
      background-color: #0062ff;
      width: 300px;
      padding: 0px;
      padding-bottom: 20px;
    }
    .image-link span {
      float: right;
      font-size: 32px;
      padding-right: 20px;
    }
    .image-btn .image-link:hover {
      text-decoration: none;
      color: white;
      background-color: #0353e9;
    }
    .image-btn a:hover {
      text-decoration: none;
      color: white;
    }
    .image-link {
      color: white;
      display: block;
      padding: 5px 10px 5px 10px;
      line-height: 28px;
      font-size: 16px;
    }
    .header {
      background-image: url("https://raw.githubusercontent.com/IBM/Developer-Playground/master/didact/images/video_insights.jpeg");
      background-position: right;
      width: 95%;
      min-height: 70px;
      display: inline-block;
      margin-top: 20px;
      margin-bottom: 20px;
      margin-left: 30px;
      margin-right: 30px;
      max-width: 1200px;
      background-repeat: no-repeat;
      background-size: 700px 500px;
    }
    .header .right-content {
      float: left;
      width: 50%;
      background-color: #525252;
      min-height: 270px;
      font-size: 16px;
    }
    .header .right-content h4 {
      background: none;
      color: white;
      padding-left: 25px;
      padding-right: 25px;
    }
    .header .right-content div {
      background: none;
      color: white;
      padding-left: 15px;
      padding-right: 25px;
      font-size: 14px;
      margin-bottom: 10px;
    }
    .header .right-content ul {
      margin: 0px;
      margin-left: 25px;
      margin-bottom: 10px;
      line-height: 16px;
    }
    .container a {
      color: #78a9ff;
      background-color: transparent;
      text-decoration: none;
    }
    .container a:visited {
      color: #8c43fc;
      background-color: transparent;
      text-decoration: none;
    }
    .apptitle {
      margin-left: 25px;
      margin-top: 20px;
      margin-bottom: 0px;
      font-size: 28px;
      color: white;
    }
    .subheading {
      margin-left: 25px;
      margin-top: 0px;
      margin-bottom: 0px;
      font-size: 16px;
      color: #c1c7cd;
    }
    .no-hover:hover {
      background-color: #0062ff !important;
    }
    .section {
      margin-top: 5px;
      margin-bottom: -50px;
    }
    a:hover {
      color: #a6c8ff;
      text-decoration: underline;
    }
    a:visited {
      color: #be95ff;
    }
    summary {
      float: left;
    }
    details>summary {
      list-style-image: url("https://raw.githubusercontent.com/IBM/Developer-Playground/development/didact/images/arrow-right.svg");
      direction: rtl;
    }
    details[open]>summary {
      list-style-image: url("https://raw.githubusercontent.com/IBM/Developer-Playground/development/didact/images/arrow-down.svg");
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="right-content" style="padding-top: 40px">
      <div class="apptitle" style="font-size: 28px; color: white">Self-service customizable CP4D environment setup</div>
      <div class="subheading">Cloud Pak for Data (CP4D) v4 adopted the Operator based installation & management pattern. This gives us flexibility to custom build a demo environment based on our needs. If we are doing a simple data science demo with services WS, WML you can choose to just install those 2 services in a self-service fashion on an appropriately sized cluster for more cost effectiveness in addition to better performance as you would have installed just services you need for your demo. This interface uses standard engineering-supported install utility/mechanism for ongoing support/maintainability.
      </div>
    </div>
  </div>
  <div class="section">
    <p style="font-size: 24px">Instructions</p>
    Please follow all the below steps in proper sequence<br>
      At a high level the installation steps include:
      <ol>
      <li>Deploy Operator Lifecycle Manager (OLM )objects for selected Cloud Pak for Data(CP4D) services.</li>
      <li>Deploy custom resources for selected CP4D services.</li>
      </ol>
      Please follow steps below as appropriate, some steps are optional depending on what needs to be done. Mandatory steps are indicated using *<br><br>
  </div>
  <div class="timeline">
    <div style="margin-top: 0px; padding-top: 0px" class="container right">
      <div class="content">
        <a class="button is-dark is-medium" title="Open Terminal"
          href="didact://?commandId=terminal-for-sandbox-container:new">Open Terminal *</a>
      </div>
    </div>
    <div style="margin-top: 0px; padding-top: 0px" class="container right">
      <div class="content">
        <p>Get the resources required to deploy CP4D services</p>
        <a class="button is-dark is-medium" title="Open Terminal"
          href="didact://?commandId=vscode.didact.sendNamedTerminalAString&&text=sandbox terminal$$git clone https://github.com/IBM/Developer-Playground -b techzone --single-branch techzone;cd%20${CHE_PROJECTS_ROOT}/techzone/olm-utils">Get Resources *</a>
      </div>
    </div>
      <div style="margin-top: 0px; padding-top: 0px" class="container right">
      <div class="content">
        <p>Configure Openshift credentials (either use combination of server, user/password (OR) server, token).<br> Openshift server name (including https://) and token can be obtained using one of two methods
<ol><li>From Openshift console, select your profile on top right and select “Copy login command”</li>
<li>From oc cli, run “oc config view --minify|grep server” to get server name and “oc whoami -t” to get token</li></ol>
You can get the ICR KEY by logging onto <a href="https://myibm.ibm.com">myibm.ibm.com</a> using your IBM ID.
</p>
        <a class="button is-dark is-medium" title="open env file"
          href="didact://?commandId=vscode.open&projectFilePath=/projects/techzone/olm-utils/env.sh">Configure *
        </a>
      </div>
    </div>
      <div style="margin-top: 0px; padding-top: 0px" class="container right">
      <div class="content">
        <p>Deploy CP4D installation utility </p>
        <a class="button is-dark is-medium" title="open env file"
          href="didact://?commandId=vscode.didact.sendNamedTerminalAString&&text=sandbox terminal$$source env.sh">Deploy *
        </a>
      </div>
    </div>
      <div style="margin-top: 0px; padding-top: 0px" class="container right">
      <div class="content">
        <p>Check the status of the installation utility deployment, it might take upto 45 seconds for the deployment to be ready, you are ready to proceed to the next step when the olm-utils pod is in running state </p>
        <a class="button is-dark is-medium" title="Check Pod State"
          href="didact://?commandId=vscode.didact.sendNamedTerminalAString&&text=sandbox terminal$$get_pods">Check Pod State
        </a>
      </div>
    </div>
    <!-- <div style="margin-top: 0px; padding-top: 0px" class="container right">
      <div class="content">
        <p>Run Utils Login to OC</p>
        <a class="button is-dark is-medium" title="Check Pod State"
          href="didact://?commandId=vscode.didact.sendNamedTerminalAString&&text=sandbox terminal$$oclogin_auto">oclogin
        </a>
      </div>
    </div> -->
      <div style="margin-top: 0px; padding-top: 0px" class="container right">
      <div class="content">
        <p>Installation of CP4D services requires the correct service code/name to be used, you can get the services code/name by listing components. The subsequent steps have a “components” field where you can provide one or more service code(s) in a comma-separated list </p>
        <a class="button is-dark is-medium" title="Check Pod State"
          href="didact://?commandId=vscode.didact.sendNamedTerminalAString&&text=sandbox terminal$$run_utils list-components --release=4.0.5">List Components
        </a>
      </div>
      </div>
      <div style="margin-top: 0px; padding-top: 0px" class="container right">
      <div class="content">
        <p>Check currently installed CP4D services on the cluster in the selected namespace. If this is a new cluster/namespace, there will be no CP4D services installed</p>
        <label>CPD instance namespace</label>
      <input type="text" id="cpd_instance_value" value="cpd-instance"><br><br>
        <a class="button is-dark is-medium" title="Execute" id="existing_service"
          >Execute
        </a>
      </div>
    </div>
     <div style="margin-top: 0px; padding-top: 0px" class="container right">
      <div class="content">
        <p>Deploy OLM  (Catalog source, Subscription, Cluster service version, Install Plan) objects for selected CP4D services</p>
        <label>Preview</label>
      <select id="olm_preview_value">
        <option value="true">true</option>
        <option value="false">false</option>
      </select>
      <br><br>
        <label>Release Version</label>
      <input type="text" id="olm_release_version" placeholder="4.0.5"><br><br>
      <label>Component list(comma separated)</label>
      <input type="text" id="olm_component_list" placeholder="cpfs,cpd_platform"><br><br>
        <a class="button is-dark is-medium" title="Execute" id="install_olm"
          >Execute
        </a>
        <br/>
        <br/>
        <a class="button is-dark is-medium" title="open the preview file" id="get_preview"
          >Open Preview File
        </a>
      </div>
    </div>
     <div style="margin-top: 0px; padding-top: 0px" class="container right">
      <div class="content">
        <p>Deploy custom resources for selected CP4D services</p>
        <label>Preview</label>
       <select id="cr_preview_value">
        <option value="true">true</option>
        <option value="false">false</option>
      </select>
      <br><br>
        <label>Release version</label>
      <input type="text" id="cr_release_version" placeholder="4.0.5"><br><br>
      <label>Component list(comma separated)</label>
      <input type="text" id="cr_component_list" placeholder="cpfs,cpd_platform"><br><br>
       <label>license_acceptance</label>
      <select id="cr_license_acceptance">
        <option value="true">true</option>
        <option value="false">false</option>
      </select>
      <br><br>
      <label>Select Storage Type</label>
      <select id="cr_storage_class">
        <option value="storage_class">Storage Class</option>
        <option value="storage_vendor">Storage Vendor</option>
      </select>
      <input type="text" id="cr_storage_value" placeholder="Storage Value"><br><br>
      <label>CPD instance namespace</label>
      <input type="text" id="cr_cpd_instance" value="cpd-instance"><br><br>
        <a class="button is-dark is-medium" title="Execute" id="install_cr"
          >Execute
        </a>
          <br/>
        <br/>
        <a class="button is-dark is-medium" title="open the preview file" id="get_preview_2"
          >Open Preview File
        </a>
      </div>
    </div>
     <div style="margin-top: 0px; padding-top: 0px" class="container right">
      <div class="content">
        <p>Cleanup install utility artifacts</p>
        <a class="button is-dark is-medium" title="Check Pod State"
          href="didact://?commandId=vscode.didact.sendNamedTerminalAString&&text=sandbox terminal$$sh delete.sh">Clean up
        </a>
      </div>
      </div>
    <a id="command_exec",href=""></a>
</body>
</html>