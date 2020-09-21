import React, {Component} from 'react';

import '../styles/ComingSoon.css';

import check from "../images/check.png"
import exclamation from "../images/exclamation.png"
import xmark from "../images/xmark.png"

import Countdown from './Countdown'
import Logo from './Logo'
import Title from './Title'
import Description from './Description'
import Subscribe from './Subscribe'

class ComingSoon extends Component {

  state = {
    countdown: {
      futureDate: "2021-05-30 00:00:00"
    },
    logo: {
      alt: "Spinning Gear",
      src: {Logo},
      spinSpeed: "slow"
    },
    title: {
      text: "Coming Soon!"
    },
    description: {
      text: "Our website will be up and running soon, just gotta figure out the Krabby Patty formula! But in the meantime subscribe for updates!"
    },
    subscribe: {
      placeholder: "Enter Email Address",
      buttontext: "Submit"
    },
    notification: {
      src: "",
      alt: "",
      message: "",
      level: "",
      visible: false
    }
  }

  showNotification = () => {
    const notification =  { ... this.state.notification };
    notification.visible = true;
    this.setState({ notification }, () => {
      setTimeout(() => {
        notification.visible = false;
        this.setState({ notification });
      }, 3000)
    });
  };

  configureNotification = level => {
    const notification = { ...this.state.notification };
    notification.level = level;

    if (level === "success") {
      notification.src = check;
      notification.alt = "Check Mark";
      notification.message = `Welcome, you will recieve all store notifications!!!`

    } else if (level === "warning") {
      notification.src = exclamation;
      notification.alt = "Exclamation Point";
      notification.message = `I believe this account is already subscribed, try another email.`

    } else {
      notification.src = xmark;
      notification.alt = "X Mark";
      notification.message = `Your email wasn't valid or it does not exist`
    }
    this.setState({ notification });
  }

  changeLogoSpeed = () => {
    const logo = { ...this.state.logo };
    logo.spinSpeed = "fast";
    this.setState({ logo }, () => {
      setTimeout(() => {
        logo.spinSpeed = "slow";
        this.setState({ logo });
      }, 1000)
    })
  }

  render() {
    const {
      countdown,
      title,
      logo,
      description,
      subscribe,
      notification
    } = this.state;

  return (
    <div className="Background">
      <Countdown futureDate={countdown.futureDate} />
      <Logo alt={logo.alt} src={logo.src} spinSpeed={logo.spinSpeed} />
      <Title text={title.text} />
      <Description text={description.text} src={notification.src} alt={notification.alt} message={notification.message} level={notification.level} visible={notification.visible}   />
      <Subscribe placeholder={subscribe.placeholder} buttonText={subscribe.buttontext} changeLogoSpeed={this.changeLogoSpeed} configureNotification={this.configureNotification} showNotification={this.showNotification} />
    </div>
  )};
}


export default ComingSoon;
