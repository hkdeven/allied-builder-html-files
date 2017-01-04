//Data

const BreakDownContent = [
  {
    "text" : "Amount:",
    "main" : "$20,000.00",
    "icon" : "fa fa-money"
  },
  {
    "text" : "Shipping Address:",
    "main" : "123 Los Olas Blvd, Ste. 101, Fort Lauderdale, FL 33301 USA",
    "icon" : "fa fa-map-marker"
  },
  {
    "text" : "Issuer:",
    "main" : "Allied Steel Buildings",
    "icon" : "fa fa-star-o"
  },
  {
    "text" : "Confirmation No:",
    "main" : "878NJDBW8Y9",
    "icon" : "fa fa-list-alt"
  }
]

// App

class Receipt extends React.Component {
  constructor() {
    super();

    this.state = {
      breakdown : {}
    }
  }

  componentWillMount() {
    this.setState({
      breakdown: BreakDownContent
    });
  }

  render() {
    return (<div className="receipt">
      <div className="receipt-breakdown">
      <div className="receipt-breakdown--header">
        <p>Reciept for</p>
        <h2>John Smith</h2>
      </div>
      <ul className="receipt-breakdown--list">
          {
            Object
            .keys(this.state.breakdown)
            .map(key => <BreakDownEntry key={key} index={key} details={this.state.breakdown[key]}/>)
          }
      </ul>
    </div>
    <Overview product="Customized Steel Building Deposit" merchant={'Allied Steel Buildings'} merchantEmail={'info@alliedbuildings.com'} name={'John'} value={'$20,000.00 USD'}/>
    </div>)
  }
}

//@TODO Get state into here
class Breakdown extends React.Component {
  render() {
    return <div className="receipt-breakdown">
      <div className="receipt-breakdown--header">
        <p>Receipt for</p>
        <h2>John Smith</h2>
      </div>
      <ul>
          {
            Object
            .keys(this.state.breakdown)
            .map(key => <BreakDownEntry key={key} index={key} details={this.state.breakdown[key]}/>)
          }
      </ul>
    </div>
  }
}

class BreakDownEntry extends React.Component {
  render() {
    const { details } = this.props;
    return <li>
          <span className={details.icon}>
          </span>
          <div className="list-content">
              <p>{details.text}
                <span className="list-bold">{details.main}</span>
              </p>
          </div>
     </li>
  }
}

class Overview extends React.Component {
  render() {
    return <div className="receipt-overview">
      <OverviewHeader logo={'http://www.alliedbuildings.com/wp-content/uploads/2016/11/Allied-Black-Logo.png'}/>
      <OverviewBody {...this.props} />
      <OverviewFooter {...this.props} />
    </div>
  }
}

class OverviewHeader extends React.Component {
  render() {
    return <div className="overview-header">
      <img className="logo" src={this.props.logo}/>

      <div className="timestamp">
        <span>20 Deccember, 2016</span>
        <span>08:30:57 EST</span>
      </div>

      <hr />
    </div>
  }
}

class PurchaseOverview extends React.Component {
  render() {
    return <div className="purchase-overview">
      <h3>{this.props.product}</h3>
    </div>
  }
}

class OverviewBody extends React.Component {
  render() {
    return <div className="overview-body">
      <PurchaseOverview {...this.props} />
      <div className="user-info">
        <p className="user-info-name"> Hello {this.props.name},</p>
        <p className="user-info-text"> You sent a payment of <span>{this.props.value}</span> to {this.props.merchant}. (<a href="mailto: info@alliedbuildings.com">{this.props.merchantEmail}</a>).  One of our experienced project managers will be in touch with you shortly to review your building specifications.</p>
        <p>Thank you for choosing Allied.</p>
        <p className="salutation"><img src="http://ec2-52-40-174-59.us-west-2.compute.amazonaws.com/banners/about_us_pic.png"/></p>
      </div>

      <div className="descriptor">
        <p>It may take a few moments for this transaction to appear in your account</p>
      </div>
    </div>
  }
}


class OverviewFooter extends React.Component {
  render() {
    return <footer className="overview-footer">
        <span className="site">
          <a href="http://www.alliedbuildings.com/contact-us/" target="_blank">www.allied.build/help</a>
        </span>
        <span className="invoice-id">
          +1.877.94 STEEL
        </span>
    </footer>
  }
}


ReactDOM.render(<Receipt/>, document.getElementById('app'));
