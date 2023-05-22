import * as React from "react";
import "./TermsNServices.css";
import page from "./assets/page.png"
function ServicesCard({ServiceName,ServiceTerms})
{
    return (
      <div>
        <p className="ServiceName">{ServiceName}</p>
        <p className="ServiceTerms">{ServiceTerms}</p>
      </div>
    );
}
export default function TermsNServices()
{
    return (
      <div className="TNSBackground">
        <div className="TNSGlass">
          <p className="TNSHeading">
            <img src={page} className="TNSImage" />
            {" Terms of services : "}
          </p>
          <hr className="HRLine" />
          <ServicesCard
            ServiceName={"1. Privacy Policy of Waltz"}
            ServiceTerms={
              "Waltz Uit values the privacy of its visitors and has a Privacy Policy in place to protect their information. This policy applies only to information collected through their website and not to any information collected offline or through other channels. By using the Waltz Uit website, visitors consent to the Privacy Policy and agree to its terms. Personal information may be collected when visitors contact Waltz Uit directly, register for an account, or opt-in to receive newsletters. This information is used to provide and improve the website, analyze usage, develop new products and services, communicate with visitors, provide updates on events, and prevent fraud. Waltz Uit uses log files, cookies, sessions, and local storage to collect and store information about visitors’ preferences and usage. The Privacy Policy may be updated from time to time and visitors are advised to review it periodically for any changes. Any questions or suggestions about the Privacy Policy can be directed to Waltz Uit via e-mail."
            }
          />
          <ServicesCard
            ServiceName={"2. Terms"}
            ServiceTerms={
              "By accessing this Website, accessible from waltzuit.in, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are not supposed to be used by any means without permission."
            }
          />
          <ServicesCard
            ServiceName={"3. Use License"}
            ServiceTerms={
              "Permission may be granted on request to temporarily download one copy of the materials on Waltz Uit's Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: \n     modify or copy the materials;\n     use the materials for any commercial purpose or for any public display;\n     attempt to reverse engineer any software contained on Waltz Uit's Website;\n     transferring the materials to another person or \"mirror\" the materials on any other server.\n"
            }
          />
          <ServicesCard
            ServiceName={"4. Disclaimer"}
            ServiceTerms={
              'All the materials on Waltz Uit\'s Website are provided "as is". Waltz Uit makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, Waltz Uit does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.'
            }
          />
          <ServicesCard
            ServiceName={"5. Site Terms of Use Modifications"}
            ServiceTerms={
              "Waltz Uit may revise these Terms of Use for its Website at any time without prior notice. By using this Website, you are agreeing to be bound by the current version of these Terms and Conditions of Use. Any questions or suggestions about The Privacy Policy or The Terms and Conditions or can be directed to us e-mail: waltz.uit.bu.2023.tech@gmail.com / pny1cl2125@gmail.com."
            }
          />
        </div>
      </div>
    );
}
// Site Terms of Use Modifications
// Waltz Uit may revise these Terms of Use for its Website at any time without prior notice. By using this Website, you are agreeing to be bound by the current version of these Terms and Conditions of Use.
// Privacy Policy of Waltz
// Waltz Uit values the privacy of its visitors and has a Privacy Policy in place to protect their information. This policy applies only to information collected through their website and not to any information collected offline or through other channels. By using the Waltz Uit website, visitors consent to the Privacy Policy and agree to its terms. Personal information may be collected when visitors contact Waltz Uit directly, register for an account, or opt-in to receive newsletters. This information is used to provide and improve the website, analyze usage, develop new products and services, communicate with visitors, provide updates on events, and prevent fraud. Waltz Uit uses log files, cookies, sessions, and local storage to collect and store information about visitors’ preferences and usage. The Privacy Policy may be updated from time to time and visitors are advised to review it periodically for any changes. Any questions or suggestions about the Privacy Policy can be directed to Waltz Uit via e-mail.