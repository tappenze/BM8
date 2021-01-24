import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Container, Form, Col, Row } from "react-bootstrap";
import "./style.css";
import links from "../../f2bLinks/";

export default class Info extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Review Information</h2>
        <p>
          CmAP includes rating information for three categories of COVID safety.
          Along with a comment section, a user must provide a specific address
          which may correspond to a building or outdoor area. This information
          is then displayed on the map UI at the corresponding address. If the
          mask icon is clicked for the location, the following information is
          displayed.
        </p>
        <p>
          The first is the mask rating. This is a rating out of 5 "masks" to
          denote the proportion of people who are following COVID mask mandates
          for the area. This may include whether or not individuals are wearing
          their mask over their nose, if the masks being worn are of sufficient
          quality, or if individuals are wearing masks at all.
        </p>
        <p>
          The second is the social distance rating. A high rating here can be
          achieved if both the establishment provides social distancing
          precautions and the patrons abide by general advice. Examples include
          stickers on the ground denoting where to stand in line, seats in a
          restaurant which are removed or labelled as reserved for COVID, or
          clear barriers to prevent transmission. Finally, people following
          guidelines such as these without guidance are good indicators of a
          safe environment.
        </p>
        <p>
          The third and final metric is the overall sanitation of the venue. A
          venue with good sanitation includes hand sanitzer dispensers at
          entrances and exits as well as frequent sanitation of surfaces. This
          score can be further increased if individuals are seen using hand
          sanitizer of their own.
        </p>
        <h2>COVID Information</h2>
        <p>*Credited to the CDC</p>
        {/* <br></br> */}
        <h3>How To Protect Yourself When Going Out</h3>
        <p>
          Wear a mask that covers your nose and mouth to help protect yourself
          and others.
        </p>
        <p>Stay 6 feet apart from others who don’t live with you.</p>
        <p>Avoid crowds.</p>
        <p>Avoid poorly ventilated indoor spaces.</p>
        <p>
          Wash your hands often with soap and water. Use hand sanitizer if soap
          and water aren’t available.
        </p>
        <h3>What to Do If You're Sick</h3>
        <p>Stay home except to get medical care.</p>
        <p>
          Isolate yourself from other members of your family to prevent spread
          to them and the people that they may have contact with, like
          grandparents.
        </p>
        <p>Even if you don’t feel sick, you can spread COVID-19 to others.</p>
        <p>
          Get care immediately if you are having emergency warning signs, like
          trouble breathing, pain or pressure in chest.
        </p>
        <h3>Symptoms to Watch Out For</h3>
        <p>Fever</p>
        <p>Cough</p>
        <p>Headaches</p>
        <p>Muscle or Body Aches</p>
        <p>Loss of Taste or Smell</p>
        <p>Sore Throat</p>
        <p>Nausea</p>
        <p>Diarrhea</p>

        <br></br>
        <h1><span role="img" aria-label="Prohibited">🚫 </span> <span role="img" aria-label="Billed Cap">🧢</span></h1>
      </div>
    );
  }
}
