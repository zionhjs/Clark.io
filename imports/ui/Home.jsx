import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import { d3 } from 'd3';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Contact from './Contact';
import SimpleBarChart from './SimpleBarChart';
import SimpleStraightAnglePieChart from './SimpleStraightAnglePieChart';

const styles = {
};

export default class Home extends Component {
	constructor(props) {
		super(props);

		this.onResize = this.onResize.bind(this)
		this.state = { screenWidth: 1000, screenHeight: 500 }
	}

	componentDidMount() {
		window.addEventListener('resize', this.onResize, false)
		this.onResize()

		// const route = this.props.location.pathname
		// console.log(route)
	}

	onResize() {
		this.setState({ screenWidth: window.innerWidth, screenHeight: window.innerHeight - 70 })
	}

	ownerClick() {
		return ga('send', 'event', 'form-engagement', 'click', 'Property Owner Signup Begun', value, {'NonInteraction': false});
	}

	brandClick() {
		return ga('send', 'event', 'form-engagement', 'click', 'Brand Signup Begun', value, {'NonInteraction': false});
	}

	render() {
		return (
			<div>
				<div id="heroContainer" className="col-sm-12 col-lg-12 noPadding">
					<div id="heroContents">
						<h1 className="huge">Field-Test</h1>
						<h4>Seamless Shopping Experience & Retail Intelligence Platform</h4>
						<div className="container visible-xs">
							<div className="row">
								<div className="col-sm-6 col-sm-offset-3">
									<Link to="/signup" className="btn btn-primary">Get Started</Link>
								</div>
							</div>
						</div>
					</div>

					<div id="heroCover"></div>
				</div>

				<div id="homePage" className="container contentContainer">
					<div id="key" className="row">
						<h1><span>Meaningful</span> Customer Interaction</h1>
						<div className="col-sm-10 col-sm-offset-1">
							<div className="container">
								<div className="col-sm-4">
									<img src="/img/key-scan.svg"></img>
								</div>
								<div className="col-sm-8 text-left">
									<h2>with the <span>DashPass™</span> SmartKey</h2>
									<div className="spacerV20"></div>
									<ul>
										<li><h4>• Easy, fast checkout in participating stores</h4></li>
										<li><h4>• Save products from multiple vendors to an eCart</h4></li>
										<li><h4>• Share products & eCarts with friends</h4></li>
										<li><h4>• Manage payment details in mobile portal</h4></li>
										<li><h4>• See past orders</h4></li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<hr />

					<div className="row">
						<h1>Real-time Insights Into The <span>Real World</span></h1>
						<div id="forOwners" className="col-sm-6 borderRight">
							<div id="ownerGraph" className="row">
				                <MediaQuery query='(min-device-width: 1224px)'>
				                  {/* You are a Desktop or Laptop */}
				                  <SimpleBarChart colors={this.props.colors}/>
				                </MediaQuery>
				                <MediaQuery query='(max-device-width: 1224px)'>
				                  {/* You are a tablet or mobile phone */}
				                  <img src="/img/ownerGraph.svg"></img>
				                </MediaQuery>
							</div>
							<div className="row">
								<h4>Daily Traffic By Location</h4>
								<h2>For <span>Property Owners</span></h2>
								<p>Gain real time insight into factors driving foot traffic to your properties.</p>
								<Link to="/owner-signup" className="btn btn-primary" onClick={this.ownerClick}>Get Started <i className="btl bt-long-arrow-right"></i></Link>
							</div>
						</div>

						<div id="forBrands" className="col-sm-6">
							<div id="brandGraph" className="row">
				                <MediaQuery query='(min-device-width: 1224px)'>
				                    <SimpleStraightAnglePieChart colors={this.props.colors}/>
				                </MediaQuery>
				                <MediaQuery query='(max-device-width: 1224px)'>
				                  {/* You are a tablet or mobile phone */}
				                  <img src="/img/brandGraph.png"></img>
				                </MediaQuery>
							</div>
							<div className="row">
								<h4>Zone Performance</h4>
								<h2>For <span>Brands</span></h2>
								<p>Gain real time insights into customer patterns, engagement and conversions.</p>
								<Link to="/brand-signup" className="btn btn-primary" onClick={this.brandClick}>Get Started <i className="btl bt-long-arrow-right"></i></Link>
							</div>
						</div>
					</div>

					<hr />

					{/*<div className="row">
						<div className="col-sm-4 card">
							<i className="bts bt-3x bt-bolt denim"></i>
							<div className="card-block">
								<h3 className="card-title">Customer Engagement</h3>
								<p className="card-text">Know which products or displays are attracting customers and exactly how close they're getting.</p>
								<a href="#" className="btn btn-primary">Go somewhere</a>
							</div>
						</div>
						<div className="col-sm-4 card">
							<i className="bts bt-3x bt-clock denim"></i>
							<div className="card-block">
								<h3 className="card-title">Dwell Times Per Area</h3>
								<p className="card-text">See where customers are spending the most time in your space and compare which areas of your property garner the most interest.</p>
								<a href="#" className="btn btn-primary">Go somewhere</a>
							</div>
						</div>
						<div className="col-sm-4 card">
							<i className="bts bt-3x bt-shopping-cart denim"></i>
							<div className="card-block">
								<h3 className="card-title">Easy eCart & Self-Checkout</h3>
								<p className="card-text">Use our proprietary RFID SmartKey to empower your customers to save products to your eCart, share products with others or seamlessly checkout.</p>
								<a href="#" className="btn btn-primary">Go somewhere</a>
							</div>
						</div>
					</div>

					<hr />*/}

					<div id="about" className="row">
						<div className="col-sm-12">
							<h3>What is Field-Test?</h3>
							<div className="container">
								<div className="col-sm-8 col-sm-offset-2">
									<p className="richText">
										Field-Test LLC, a subsidiary of <a href="http://lionesquegroup.com/" target="_blank">The Lionesque Group</a>, is an insights & intelligence platform that empowers retailers and property owners to finally connect the online and offline worlds with real-time transparency into global, regional, or local store-specific engagement & sales performance.
									</p>
									<p className="richText">
										With our combined 20+ years experience in retail and technology, we work closely with our clients to architect immersive and interactive environments that drive in-store engagement between customers and brands.
									</p>
								</div>
							</div>

						</div>
					</div>

					<hr />

					<div id="how-it-works" className="row">
						<div className="col-12">
							<h1>How Does It Work?</h1>
							<div className="howImg">
								<img src="/img/how-it-works.svg"></img>
							</div>

							<div className="row">
								<div className="col-sm-8 col-sm-offset-2">
									<p className="richText">
										The real time data we collect helps both retailers and property owners better forecast and grow their ROI on brick-and-mortar investments through deep analytics on customer behavior surrounding product interaction, zone activity, and dwell times.
									</p>
								</div>
							</div>
						</div>
					</div>

					<hr />

					<div id="press" className="row">
						<div className="col-sm-10 col-sm-offset-1">
							<h3>What People Are Saying</h3>
							<div className="flexRow row">
								<div className="pressBox col-xs-6 col-sm-4 col-lg-3">
									<a className="card" href="http://wgntv.com/2017/08/29/online-shopping-comes-to-life-at-water-tower-with-store-called-in-real-life/" title="WGN9 on Field-Test" target="_blank">
										<img className="card-img-top" src="/img/press/wgn9.jpg" alt=""></img>
										<div className="card-block">
											<p className="card-text">"Online shopping comes to life at Water Tower Place"</p>
										</div>
									</a>
								</div>
								<div className="pressBox col-xs-6 col-sm-4 col-lg-3">
									<a className="card" href="http://www.chicagotribune.com/business/ct-water-tower-place-irl-concept-shop-0809-biz-20170808-story.html" title="Chicago Tribune on Field-Test" target="_blank">
										<img className="card-img-top" src="/img/press/chicago-tribune.jpg" alt=""></img>
										<div className="card-block">
											<p className="card-text">"Chicago's Water Tower Place is getting a new take on the pop-up shop"</p>
										</div>
									</a>
								</div>
								<div className="pressBox col-xs-6 col-sm-4 col-lg-3">
									<a className="card" href="http://www.businessinsider.com/malls-are-getting-inventive-to-attract-shoppers-2017-8" title="Business Insider on Field-Test" target="_blank">
										<img className="card-img-top" src="/img/press/business-insider.jpg" alt=""></img>
										<div className="card-block">
											<p className="card-text">"GGP [is] introducing physical pop-up shops for e-commerce pureplays in the hope of revolutionizing the in-mall shopping experience"</p>
										</div>
									</a>
								</div>
								<div className="pressBox col-xs-6 col-sm-4 col-lg-3">
									<a className="card" href="http://www.glossy.co/store-of-the-future/ggp-looks-to-revive-its-malls-with-interactive-concept-stores?utm_campaign=glossydis&utm_source=twitter&utm_medium=social" title="Glossy on Field-Test" target="_blank">
										<img className="card-img-top" src="/img/press/glossy.jpg" alt=""></img>
										<div className="card-block">
											<p className="card-text">"We're offering [brands] a physical in-store experience that mimics or matches up with what they're used to on an e-commerce platform"</p>
										</div>
									</a>
								</div>
								<div className="pressBox col-xs-6 col-sm-4 col-lg-3">
									<a className="card" href="http://www.rfidjournal.com/articles/view?16495" title="RFID Journal on Field-Test" target="_blank">
										<img className="card-img-top" src="/img/press/rfid-journal.jpg" alt=""></img>
										<div className="card-block">
											<p className="card-text">"The system, tracks the movement of customer traffic and enables shoppers to create wish lists of products they see in a temporary environment</p>
										</div>
									</a>
								</div>
								<div className="pressBox col-xs-6 col-sm-4 col-lg-3">
									<a className="card" href="http://www.retaildive.com/news/mall-operator-gives-online-retailers-a-spot-with-in-real-life-shop/448856/" title="Retail Dive on Field-Test" target="_blank">
										<img className="card-img-top" src="/img/press/retail-dive.jpg" alt=""></img>
										<div className="card-block">
											<p className="card-text">"It's essentially a store that allows e-commerce retailers to serve mall customers"</p>
										</div>
									</a>
								</div>
								<div className="pressBox col-xs-6 col-sm-4 col-lg-3">
									<a className="card" href="https://cheddar.com/videos/shop-online-experience-in-store" title="Cheddar on Field-Test" target="_blank">
										<img className="card-img-top" src="/img/press/cheddar.jpg" alt=""></img>
										<div className="card-block">
											<p className="card-text">"New frontier in retail [IRL] allows customers to shop their favorite online brands while still being able to experience them in person"</p>
										</div>
									</a>
								</div>
								<div className="pressBox col-xs-6 col-sm-4 col-lg-3">
									<a className="card" href="https://www.impinj.com/library/blog/irl-creates-in-store-shopping-experiences-for-ecommerce-retailers/" title="Impinj on Field-Test" target="_blank">
										<img className="card-img-top" src="/img/press/impinj.jpg" alt=""></img>
										<div className="card-block">
											<p className="card-text">"Field-Test uses RAIN RFID and the Impinj platform to create a digital shopping experience that is, in fact, purely physical at IRL"</p>
										</div>
									</a>
								</div>
								<div className="pressBox col-xs-6 col-sm-4 col-lg-3">
									<a className="card" href="http://www.hfndigital.com/news/home-products-pop-shop-chicago-offers-interactive-experience/" title="HFN on Field-Test" target="_blank">
										<img className="card-img-top" src="/img/press/hfn.jpg" alt=""></img>
										<div className="card-block">
											<p className="card-text">"IRL is using interactive and RFID technology to provide necessary product information to shoppers as well as to gather consumer data for participating brands"</p>
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>

					<hr />

					<div id="testimonials" className="row">
						<div className="col-sm-10 col-sm-offset-1">
							<div className="container">
								<div className="col-sm-2">
									<img className="outset circular" src="/img/erin-ggp.jpg"></img>
								</div>
								<div className="col-sm-8">
									<p className="richText">
										<blockquote>"Having Field-Test at IRL has given us real hard-evidence around who visits and how long they say. It has brought us rich data what's driving traffic, what is driving dwell times and what customer's are looking to buy."</blockquote>
									</p>
									<p className="richText"><strong>Erin McCarthy</strong><br />VP, Retail Development<br />GGP Properties</p>
								</div>
							</div>
						</div>
					</div>

					<hr />

					<div id="team" className="team row">
						<h1>Executive Team</h1>
						<div className="col-sm-4 card">
							<div className="card-img-container">
								<img className="card-img-top" src="/img/melissa.jpg" alt=""></img>
							</div>
							<div className="card-block">
								<h4 className="card-title">Melissa Gonzalez</h4>
								<h5>CEO & Founder</h5>
								<p className="card-text">Founder of The Lionesque Group. Author of <i>The Pop Up Paradigm:How Brands Can Build Human Connections in a Digital Age</i>. Licensed motorcyclist and scuba diver.</p>
							</div>
						</div>
						<div className="col-sm-4 card">
							<div className="card-img-container">
								<img className="card-img-top" src="/img/aaron.jpg" alt=""></img>
							</div>
							<div className="card-block">
								<h4 className="card-title">Aaron Smulktis</h4>
								<h5>Chief Technology Officer</h5>
								<p className="card-text">Former Apple design/dev, fin-tech marketing dir, full-stack developer. A boat captain who makes paintings.</p>
							</div>
						</div>
						<div className="col-sm-4 card">
							<div className="card-img-container">
								<img className="card-img-top" src="/img/gaby.jpg" alt=""></img>
							</div>
							<div className="card-block">
								<h4 className="card-title">Gabriela Castelao</h4>
								<h5>Business Development</h5>
								<p className="card-text">Operations Mgmt and Marketing experience. Former tech entrepreneurship & marketer at luxury brands. Loves skydiving and french fries.</p>
							</div>
						</div>
					</div>

					<div className="team row">
						<div className="col-sm-4 card">
							<div className="card-img-container">
								<img className="card-img-top" src="/img/larry.jpg" alt=""></img>
							</div>
							<div className="card-block">
								<h4 className="card-title">Larry Arnstein</h4>
								<h5>Vice President of Solutions & Business Development</h5>
								<p className="card-text">Former Vice President of Solutions and Business Development for RAIN RFID platform provider Impinj. Entrepreneur, academic, skier and player of the game of Ultimate.</p>
								<p><span className="badge">Advisor</span></p>
							</div>
						</div>
						<div className="col-sm-4 card">
							<div className="card-img-container">
								<img className="card-img-top" src="/img/ken.jpg" alt=""></img>
							</div>
							<div className="card-block">
								<h4 className="card-title">Ken Pilot</h4>
								<h5>Founder of Pilot consulting</h5>
								<p className="card-text">Past president of The Gap, Ralph Lauren, American Eagle and Abc carpet & home. Former marathon runner with a personal best of 2:54.</p>
								<p><span className="badge">Advisor</span></p>
							</div>
						</div>
						<div className="col-sm-4 card">
							<div className="card-img-container">
								<img className="card-img-top" src="/img/eric.jpg" alt=""></img>
							</div>
							<div className="card-block">
								<h4 className="card-title">Eric Hertz</h4>
								<h5>President, CRRE</h5>
								<p className="card-text">10+ Years of Retail and Real Estate Education. Former SVP of Education and Certification at ICSC. Avid music fan and wanna-be guitarist.</p>
								<p><span className="badge">Advisor</span></p>
							</div>
						</div>
					</div>

					<hr />

					<div className="row">
						<h3 className="text-center">Got Questions?</h3>
						<h1>Get In Touch</h1>
						<Contact colors={this.props.colors} />
					</div>

					<hr />
				</div>
			</div>
		);
	}
}
