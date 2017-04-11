<!DOCTYPE html>

<html>

   <head>
      <meta name="description"
	     content="Quick Dive Into HBP Validation Framework Platform (HVF)." />
      <title>Dive into HVF Platform</title>
	  <link rel="stylesheet" href="validation_guidebook.css" />
   </head>

   <body onload="javascript:clearCurrentLink()">
      <div id="BodyContainer">
	     <!-- Header -->
	     <div>
		    <!-- <a href="xxxxx"><img src="xxxxx" alt="xxxxx" class="logo" /></a> -->
			<!-- Subject Title -->
		    <div id="SubjHeading">Quick Dive Into HBP Validation Framework Platform (HVF)</div>
			<br style="clear: both;" />
		 </div>
		 <!-- Menu Panel -->
	     <div id="MenuBox">
	        &nbsp;<br />
			<b>Steps</b><br />
			&#x2219;&nbsp;<a href="getModel.html">Choosing and Loading a Model.</a><br />
			&#x2219;&nbsp;<a href="getTest.html">Choosing and Loading a Test.</a><br />
                        &#x2219;&nbsp;<a href="runTestonModel.html">Running the Desired Validation Test On the Chosen Model.</a><br />
                        &#x2219;&nbsp;<a href="storeData.html">Store the Data of the Results.</a><br />
                        &#x2219;&nbsp;<a href="registerData.html">Registering Data into HVF Database.</a><br />
                        &#x2219;&nbsp;<a href="runScript.html">All the above from a python script.</a><br />
	     </div>
	     <!-- Main Content -->
	     <div id="ContentBox">
		    <p>&nbsp;</p>
                        <p>
                           At current stage of the development of the <a target="_blank" href="https://validation.brainsimulation.eu/">HVF platform</a>, the framework is accessible via client and it will be possible to access through an app in the future. Therefore, this quick-guide will demonstrate how a user can access from a client (python client or juputer notebook). The juputer notebook will be used to illustrate this.
                        </p>
			<p>
			   <div class="Figs" onclick="enlargeImage('1')">
				   <img src="imgs/installhbpvalidframework.gif" alt="Install HVF"  class="FloatRight" /> <br />
                           </div>
			</p>
            <p>
			   <h2>Purpose</h2>
			</p>
			<p>
	           A user visits the HVF platform (shown below). The user then choses <a href="getModel.html">a model</a> to validate and the <a href="getTest.html">desired validation test</a>. After this the user <a href="runTestonModel.html">runs</a> the validation test. The data of the test result is <a href="storeData.html">stored</a>. The result and the data location is <a href="registerData.html">registered</a> in the HVF database.
			</p>
			<p>
			   <h2>Background</h2>
			</p>
                        <p>
                           Before diving into the steps one necessary condition is to install the HVF platform. This is done as follows (illustrated on the right)
                        </p>
			<p>
			   <strong><code>>> !pip install https://github.com/apdavison/hbp-validation-client/archive/master.zip</code></strong>
                        </p>
                        <p>
                           <img src="imgs/vuc_home.png" alt="The HVF Platform"  class="Fullcentered" />
                        </p>
			<p>&nbsp;</p>
		</div>
		<script type="text/javascript" src="clearlink_togglevisibility.js"></script>
		<noscript><p>Welcome, non-JavaScript-enabled browser.</p></noscript>
      </div>
   </body>
</html>
