var NewComponent = React.createClass({
  render: function() {
      return (
          <div className="container-fluid">
              <div id="da-slider" className="da-slider" style="display:block!important;margin-left:auto;margin-right:auto;">
                  <img className="center-block block-center" style="margin-top:2%;width:90%;max-width:700px;" src="images/model-filler.png" />
              </div>
          </div>

          <div className="react-home react-checkout">
              <div className="react-input-box">

                  {/* step wizard */}
                  <div className="container">
                      <div className="stepwizard col-md-offset-3 col-sm-offset-1 col-xs-offset-1">
                          <div className="step-row setup-panel" id="wizardControl">
                              <div className="step">
                                  <a href="#step-1" type="button" className="btn btn-primary button-no-gradient btn-circle btn-step">1</a>
                                  <p>Details</p>
                              </div>
                              <div className="step">
                                  <a href="#step-2" type="button" className="btn btn-default button-no-gradient btn-circle" disabled="disabled">2</a>
                                  <p>Summary</p>
                              </div>
                              <div className="step">
                                  <a href="#step-3" type="button" className="btn btn-default button-no-gradient btn-circle" disabled="disabled">3</a>
                                  <p>Approval</p>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="container">

                      <form role="form" action="" method="post">

                          <div className="row setup-content well" id="step-1">

                            <div className="row">

                              {/* details panel */}
                              <div className="col-md-3 text-center">
                                  <div className="panel panel-info">
                                      <div className="panel-heading">Review Building Details</div>
                                          <div className="panel-body">
                                              <div className="table-responsive project-list">
                                              <table className="table table-striped">
                                              <tbody  style="background:#fff!important;outline:none!important;border:none!important;">
                                              <tr style="background:#fff!important;outline:none!important;border:none!important;">
                                                  <td style="background:#fff!important;outline:none!important;border:none!important;">TOTAL</td>
                                                  <td style="background:#fff!important;outline:none!important;border:none!important;"><strong>$11,200.00</strong></td>
                                              </tr>
                                              <tr style="background:#fff!important;">
                                                  <td>DEPOSIT</td>
                                                  <td style="color:green!important;background:#fff!important;"><strong>$1,120.00</strong></td>
                                              </tr>
                                              </tbody>
                                              </table>
                                              </div>
                                          </div>
                                          <ul className="list-group">
                                              <li className="list-group-item list-group-item-info">
                                                  <div className="table-responsive">
                                                  <table className="table">
                                                  <thead>
                                                  <tr>
                                                      <td>width</td>
                                                      <td>length</td>
                                                      <td>height</td>
                                                  </tr>
                                                  </thead>
                                                  <tbody>
                                                  <tr>
                                                      <td>40'</td>
                                                      <td>40'</td>
                                                      <td>15'</td>
                                                  </tr>
                                                  </tbody>
                                                  </table>
                                                  </div>
                                              </li>
                                              <li className="list-group-item">Square footage <span className="badge">1600</span></li>
                                              <li className="list-group-item">Pitch <span className="badge">1:12</span></li>
                                          </ul>
                                  </div>
                              </div>

                              {/* standards panel */}
                              <div className="col-md-3 text-center">
                                  <div className="panel panel-info">
                                      <div className="panel-heading">Building Standards</div>
                                      <div className="panel-body text-left">
                                          <ul>
                                              <li>Engineered structural blueprints</li>
                                              <li>local structural buildings codes</li>
                                              <li>Bolt together construction</li>
                                              <li>Galvanized secondary</li>
                                              <li>Life timewarranty onfasteners</li>
                                              <li>20 year panel paint warranty</li>
                                              <li>Dedicated project management</li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>

                              {/* building detail section */}
                              <div className="col-md-6">

                                  <div className="col-md-12"><h4>Building Details</h4></div>

                                  <div className="col-md-6">
                                      <div className="section form-group">
                                          <label for="timeframe" className="field-label control-label">Business type *</label>
                                          <label className="field select">
                                             <select name="industry" tabindex="9" required="required">
                                                <option value="" selected="selected">- select -</option>
                                                <option value="Agricultural">Agricultural</option>
                                                <option value="Aviation">Aviation</option>
                                                <option value="Commercial">Commercial</option>
                                                <option value="Equestrian">Equestrian</option>
                                                <option value="Government/Military">Government/Military</option>
                                                <option value="Industrial">Industrial</option>
                                                <option value="Institutional/Church">Institutional/Church</option>
                                                <option value="Manufacturing">Manufacturing</option>
                                                <option value="Marina/Boat">Marina/Boat</option>
                                                <option value="Mining">Mining</option>
                                                <option value="Recreational">Recreational</option>
                                                <option value="Residential">Residential</option>
                                                <option value="Storage">Storage</option>
                                                <option value="Workshop">Workshop</option>
                                                <option value="Other">Other</option>
                                             </select>
                                          </label>
                                      </div>
                                  </div>

                                  <div className="col-md-6">
                                      <div className="section form-group">
                                          <label className="field-label control-label">Timeframe *</label>
                                          <label className="field select">
                                              <select name="LEADCF6" className="field-label control-label" required="required">
                                                  <option value="" selected="selected">- select -</option>
                                                  <option value="ASAP">ASAP</option>
                                                  <option value="1-3 Months">1-3 Months</option>
                                                  <option value="3-6 Months">3-6 Months</option>
                                                  <option value="6-12 Months">6-12 Months</option>
                                                  <option value="12+ Months">12+ Months</option>
                                              </select>
                                          </label>
                                      </div>
                                  </div>

                                  <div className="col-md-6">
                                      <div className="section form-group">
                                          <label className="field-label control-label">Company</label>
                                          <input type="text" className="form-control" placeholder="Company" />
                                      </div>
                                  </div>

                                  <div className="col-md-6">
                                      <div className="section form-group">
                                          <label className="field-label control-label">Zipcode *</label>
                                          <input min="5" type="text" className="form-control" placeholder="12345" required="required" />
                                      </div>
                                  </div>

                                  <div className="col-md-6">
                                      <div className="section form-group">
                                          <label className="control-label">First Name *</label>
                                          <input type="text" className="form-control" placeholder="Enter First Name" required="required" />
                                      </div>
                                  </div>

                                  <div className="col-md-6">
                                      <div className="section form-group">
                                          <label className="field-label control-label">Last Name *</label>
                                          <input type="text" className="form-control" placeholder="Enter Last Name" required="required" />
                                      </div>
                                  </div>

                              </div>

                            </div>

                            <button className="pull-right btn nextBtn next" aria-label="Right Align" type="button">Next
                                <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span></button>
                            <button className="pull-right btn save" type="button">Save</button>

                          </div>

                          <div className="row setup-content well" id="step-2">

                            <div className="row">

                              {/* details panel */}
                              <div className="col-md-3 text-center">
                                  <div className="panel panel-info">
                                      <div className="panel-heading">Review Building Details</div>
                                          <div className="panel-body">
                                              <div className="table-responsive project-list">
                                              <table className="table table-striped">
                                              <tbody  style="background:#fff!important;outline:none!important;border:none!important;">
                                              <tr style="background:#fff!important;outline:none!important;border:none!important;">
                                                  <td style="background:#fff!important;outline:none!important;border:none!important;">TOTAL</td>
                                                  <td style="background:#fff!important;outline:none!important;border:none!important;"><strong>$11,200.00</strong></td>
                                              </tr>
                                              <tr style="background:#fff!important;">
                                                  <td>DEPOSIT</td>
                                                  <td style="color:green!important;background:#fff!important;"><strong>$1,120.00</strong></td>
                                              </tr>
                                              </tbody>
                                              </table>
                                              </div>
                                          </div>
                                          <ul className="list-group">
                                              <li className="list-group-item list-group-item-info">
                                                  <div className="table-responsive">
                                                  <table className="table">
                                                  <thead>
                                                  <tr>
                                                      <td>width</td>
                                                      <td>length</td>
                                                      <td>height</td>
                                                  </tr>
                                                  </thead>
                                                  <tbody>
                                                  <tr>
                                                      <td>40'</td>
                                                      <td>40'</td>
                                                      <td>15'</td>
                                                  </tr>
                                                  </tbody>
                                                  </table>
                                                  </div>
                                              </li>
                                              <li className="list-group-item">Square footage <span className="badge">1600</span></li>
                                              <li className="list-group-item">Pitch <span className="badge">1:12</span></li>
                                          </ul>
                                  </div>
                              </div>

                              {/* standards panel */}
                              <div className="col-md-3 text-center">
                                  <div className="panel panel-info">
                                      <div className="panel-heading">Building Standards</div>
                                      <div className="panel-body text-left">
                                          <ul>
                                              <li>Engineered structural blueprints</li>
                                              <li>local structural buildings codes</li>
                                              <li>Bolt together construction</li>
                                              <li>Galvanized secondary</li>
                                              <li>Life timewarranty onfasteners</li>
                                              <li>20 year panel paint warranty</li>
                                              <li>Dedicated project management</li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>

                              {/* customer details section */}
                              <div className="col-md-6">

                                  <div className="col-md-12"><h4>Your Information</h4></div>

                                  <div className="col-md-6">
                                      <div className="section form-group">
                                          <label className="field-label control-label">Email *</label>
                                          <input type="email" className="form-control" placeholder="your@email.com" required="required" />
                                      </div>
                                  </div>

                                  <div className="col-md-6">
                                      <div className="section form-group">
                                          <label className="field-label control-label">Phone *</label>
                                          <input type="number" className="form-control" placeholder="(•••) ••• ••••" required="required"  />
                                      </div>
                                  </div>

                                  <div className="col-md-12"><h4>Delivery Address</h4></div>

                                  <div className="col-md-6">
                                      <div className="section form-group">
                                          <label className="field-label control-label">Street Address *</label>
                                          <input type="text" className="form-control" placeholder="Enter Street Address" required="required" />
                                      </div>
                                  </div>

                                  <div className="col-md-6">
                                      <div className="section form-group">
                                          <label className="field-label control-label">Suite</label>
                                          <input type="text" className="form-control" placeholder="Street Address Continued" />
                                      </div>
                                  </div>

                                  <div className="col-md-6">
                                      <div className="section form-group">
                                          <label className="field-label control-label">City *</label>
                                          <input type="text" className="form-control" placeholder="Enter City" required="required" />
                                      </div>
                                  </div>

                                  <div className="col-md-6">
                                      <div className="section form-group">
                                          <label className="field-label control-label">Country</label>
                                          <input type="text" className="form-control" placeholder="Enter Country" />
                                      </div>
                                  </div>

                              </div>

                            </div>

                            <button className="pull-right btn nextBtn next" aria-label="Right Align" type="button">Next <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span></button>
                            <button className="pull-right btn save" type="button">Save</button>
                            <button className="pull-right btn save" type="button">Edit</button>
                            <button className="pull-right btn prevBtn prev" aria-label="Left Align" type="button">
                                <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span> Previous</button>

                          </div>

                          <div className="row setup-content well" id="step-3">

                            <div className="row">

                                <div className="col-md-6">

                                    {/* details panel */}
                                    <div className="col-md-6 text-center">
                                        <div className="panel panel-info">
                                            <div className="panel-heading">Review Building Details</div>
                                                <div className="panel-body">
                                                    <div className="table-responsive project-list">
                                                        <table className="table table-striped">
                                                        <tbody  style="background:#fff!important;outline:none!important;border:none!important;">
                                                        <tr style="background:#fff!important;outline:none!important;border:none!important;">
                                                            <td style="background:#fff!important;outline:none!important;border:none!important;">TOTAL</td>
                                                            <td style="background:#fff!important;outline:none!important;border:none!important;"><strong>$11,200.00</strong></td>
                                                        </tr>
                                                        <tr style="background:#fff!important;">
                                                            <td>DEPOSIT</td>
                                                            <td style="color:green!important;background:#fff!important;"><strong>$1,120.00</strong></td>
                                                        </tr>
                                                        </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <ul className="list-group">
                                                    <li className="list-group-item list-group-item-info">
                                                        <div className="table-responsive">
                                                        <table className="table">
                                                        <thead>
                                                        <tr>
                                                            <td>width</td>
                                                            <td>length</td>
                                                            <td>height</td>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <td>40'</td>
                                                            <td>40'</td>
                                                            <td>15'</td>
                                                        </tr>
                                                        </tbody>
                                                        </table>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item">Square footage <span className="badge">1600</span></li>
                                                    <li className="list-group-item">Pitch <span className="badge">1:12</span></li>
                                                </ul>
                                        </div>
                                    </div>

                                    {/* options panel */}
                                    <div className="col-md-6" id="selected-options">
                                        <div className="panel panel-info">
                                            <div className="panel-heading text-center">Selected Options</div>
                                            <div className="panel-body list">
                                                <div className="table-responsive project-list">
                                                <table className="table text-success table-striped">
                                                <tbody>
                                                <tr>
                                                    <td><strong>Openings</strong><br/>
                                                        <small>1 Door</small><br/>
                                                        <small>1 Window</small></td>
                                                    <td>$30.00</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Lean-tos</strong><br/>
                                                        <small>40' X 15'</small><br/>
                                                        <small>20' X 15'</small>
                                                    </td>
                                                    <td>$0.00</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Gutters/Downspouts</strong></td>
                                                    <td>$0.00</td>
                                                </tr>
                                                </tbody>
                                                </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* building standards */}
                                    <div className="col-md-12 text-center">
                                        <div className="panel panel-info">
                                            <div className="panel-heading">Building Standards</div>
                                            <div className="panel-body text-left">
                                                <ul>
                                                    <li>Engineered structural blueprints</li>
                                                    <li>local structural buildings codes</li>
                                                    <li>Bolt together construction</li>
                                                    <li>Galvanized secondary</li>
                                                    <li>Lifetime warranty on fasteners</li>
                                                    <li>20 year panel paint warranty</li>
                                                    <li>Dedicated project management</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-md-6">

                                    {/* step 3, column 1 */}
                                    <div className="col-md-6">
                                        <h4>Review and Submit</h4>
                                        <p>
                                          <b>John Smith<br />
                                          XYZ, Inc.<br />
                                          123 Broward Blvd, Suite #101<br />
                                          Fort Lauderdale, FL 33301 USA<br />
                                          email@address.com<br />
                                          +1.954.333.4444</b>
                                        </p>
                                        <p>
                                          <b>Time frame</b>:  1-3 months<br />
                                          <b>Business type</b>:  Marina/Boat
                                        </p>
                                        <div>
                                          <input type="checkbox" checked />  Billing Address Same
                                        </div>
                                    </div>

                                    {/* step 3, column 2 */}
                                    <div className="col-md-6">
                                        <h4>Payment Information</h4>
                                        <div className="section form-group">
                                            <label className="field-label control-label">Credit Card Number *</label>
                                            <input type="number" className="form-control" placeholder="•••• •••• •••• ••••" required="required" autofocus />
                                        </div>
                                        <div className="section form-group">
                                            <label className="field-label control-label">Expiration *</label>
                                            <input type="text" className="form-control" placeholder="01/16" required="required" />
                                        </div>
                                        <div className="section form-group">
                                            <label className="field-label control-label">CVC *</label>
                                            <input type="text" className="form-control" placeholder="123" required="required" />
                                        </div>
                                    </div>

                                    <div className="col-md-12"><h4>Billing Address</h4></div>

                                    {/* billing column 1 */}
                                    <div className="col-md-6">
                                        <div className="section form-group">
                                            <label className="field-label control-label">Street Address *</label>
                                            <input type="text" className="form-control" placeholder="Enter Street Address" required="required" />
                                        </div>
                                        <div className="section form-group">
                                            <label className="field-label control-label">Suite</label>
                                            <input type="text" className="form-control" placeholder="Street Address Continued" />
                                        </div>
                                    </div>

                                    {/* billing column 2 */}
                                    <div className="col-md-6">
                                        <div className="section form-group">
                                            <label className="field-label control-label">City *</label>
                                            <input type="text" className="form-control" placeholder="Enter City" required="required" />
                                        </div>
                                        <div className="section form-group">
                                            <label className="field-label control-label">Zipcode *</label>
                                            <input type="number" className="form-control" placeholder="12345" required="required" />
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                      <div className="panel panel-success">
                                        <div id="no-obligation-panel" className="panel-body text-center">
                                          <i>No obligation cancellation policy!</i>  <span className="glyphicon glyphicon-hand-left"></span>
                                        </div>
                                      </div>
                                    </div>

                                </div>

                            </div>

                            {/* Badges */}
                            <div className="row">
                              <div className="col-md-12">
                                  <div className="safe-purchase">
                                      <ul>
                                          <li><img src="http://ec2-52-24-108-83.us-west-2.compute.amazonaws.com/images/accr-bus.png" /></li>
                                          <li><img src="http://ec2-52-24-108-83.us-west-2.compute.amazonaws.com/images/google.png" /></li>
                                          <li><img src="http://ec2-52-24-108-83.us-west-2.compute.amazonaws.com/images/approved.png" /></li>
                                      </ul>
                                  </div>
                              </div>
                            </div>

                            <button className="pull-right btn btn-submit next" type="submit">Process <span className="glyphicon glyphicon-ok"></span></button>
                            <button className="pull-right btn prevBtn prev" aria-label="Left Align" type="button">
                                <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span> Previous</button>

                          </div>

                      </form>

                  </div>

              </div>

              <footer>
                  <div className="react-footer-navigation clearfix">

                      <div className="col-md-3 col-sm-2 text-right col-xs-2">
                          <img src="images/logo.png" alt="logo"/>
                      </div>

                      <div className="col-md-2 col-sm-5 col-xs-5">
                          <ul>
                              <li className="title">LEARN MORE</li>
                              <li><a href="http://alliedcares.com/" target="_blank">Allied Cares</a></li>
                          </ul>
                      </div>

                      <div className="col-md-2 col-md-offset-0 col-sm-5 col-sm-offset-2 col-xs-5 col-xs-offset-2">
                          <ul>
                              <li className="title">HELP</li>
                              <li><a href="#">FAQ</a></li>
                          </ul>
                      </div>

                      <div className="col-md-2 col-sm-5 col-xs-5">
                          <ul>
                              <li className="title">CONNECT</li>
                              <li><a href="http://www.alliedbuildings.com/contact-us/" target="_blank">Contact Us</a></li>
                          </ul>
                      </div>

                  </div>

                  <div className="text-center copyright clearfix">Copyright 2016 Allied Steel Buildings. All rights reserved.</div>

              </footer>

          </div>

		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
		<script type="text/javascript">
    $(document).ready(function () {

    var navListItems = $('div.setup-panel div a'),
            allWells = $('.setup-content'),
            allNextBtn = $('.nextBtn'),
            allPrevBtn = $('.prevBtn');

    allWells.hide();

    navListItems.click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
                $item = $(this);

        if (!$item.hasClass('disabled')) {
            navListItems.removeClass('btn-primary').addClass('btn-default');
            $item.addClass('btn-primary');
            allWells.hide();
            $target.show();
            $target.find('input:eq(0)').focus();
        }
    });

    allNextBtn.click(function(){
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='email'],input[type='number'],select"),

        $(".form-group").removeClass("has-error");
        for(var i=0; i<curInputs.length; i++){
            if (!curInputs[i].validity.valid){
                isValid = false;
                $(curInputs[i]).closest(".form-group").addClass("has-error");
            }
        }

        if (isValid)
            nextStepWizard.removeAttr('disabled').trigger('click');
    });

    allPrevBtn.click(function(){
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            prevStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().prev().children("a");

        $(".form-group").removeClass("has-error");
        prevStepWizard.removeAttr('disabled').trigger('click');
    });

    $('div.setup-panel div a.btn-primary').trigger('click');
});
		</script>
    )
  };
})
