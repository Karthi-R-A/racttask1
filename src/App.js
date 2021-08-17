import { useState } from "react";
import "./styles.css";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
const pricedata = [
  {
    title: "FREE",
    price: "$0",
    line1: "Single User",
    line2: "5GB Storage",
    line3: "Unlimited Public Projects",
    line4: "Community Access",
    line5: "Unlimited Private Projects",
    line6: "Dedicated Phone Support",
    line7: "Free Subdomain",
    line8: "Monthly Status Reports",
    feature: [
      {
        name: "Monthly Status Reports",
        access: false
      }
    ]
  },

  {
    title: "PLUS",
    price: "$9",
    line1: "5 User",
    line2: "50GB Storage",
    line3: "Unlimited Public Projects",
    line4: "Community Access",
    line5: "Unlimited Private Projects",
    line6: "Dedicated Phone Support",
    line7: "Free Subdomain",
    line8: "Monthly Status Reports"
  },
  {
    title: "PRO",
    price: "$49",
    line1: "Unlimited User",
    line2: "150GB Storage",
    line3: "Unlimited Public Projects",
    line4: "Community Access",
    line5: "Unlimited Private Projects",
    line6: "Dedicated Phone Support",
    line7: "Unlimited Free Subdomain",
    line8: "Monthly Status Reports"
  }
];

export default function App() {
  return (
    <Card className="card-main">
      <div className="card">
        {pricedata.map((detail) => (
          <Card className="card1">
            <div>
              <h2 className="title2" style={{ textAlign: "center" }}>
                {detail.title}
              </h2>
              <p style={{ textAlign: "center" }}>
                <span className="title1" style={{ textAlign: "center" }}>
                  {detail.price}
                </span>
                <sub>/month</sub>
              </p>
              <div
                style={{
                  borderTop: "1px solid black ",
                  marginLeft: 20,
                  marginRight: 20
                }}
              ></div>
              <p className="title"> {detail.line1} </p>
              <p className="title"> {detail.line2} </p>
              <p className="title"> {detail.line3} </p>
              <p className="title"> {detail.line4} </p>
              <p className="title"> {detail.line5} </p>
              <p className="title"> {detail.line6} </p>
              <p className="title"> {detail.line7} </p>
              <p className="title"> {detail.line8} </p>

              <Button variant="contained" color="primary">
                Primary
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Card>
  );
}
