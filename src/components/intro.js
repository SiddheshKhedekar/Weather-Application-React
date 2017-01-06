import React, { Component } from 'react';

export default class Intro extends Component {
  render() {
    return (
		<div class="view hm-black-strong">
	        <div class="full-bg-img flex-center">
	            <ul>
	                <li>
	                    <h1 class="h1-responsive wow fadeInUp">Our New Course is Ready</h1></li>
	                <li>
	                    <p class="wow fadeInUp" data-wow-delay="0.2s">It comes with a lot of new features, easy to follow videos and images. Check it out now!</p>
	                </li>
	                <li class="wow fadeInUp" data-wow-delay="0.4s">
	                    <a class="btn btn-white-outline btn-lg"><i class="fa fa-user left"></i> Sign up!</a>
	                    <a class="btn btn-white-outline btn-lg"><i class="fa fa-book left"></i>Learn more</a>
	                </li>
	            </ul>
	        </div>
	    </div>
    );
  }
}