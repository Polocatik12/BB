import React, {useState} from "react";
import emailjs from "emailjs-com";
import {useForm} from "react-hook-form";


const Contacts = () => {
    const[successMessage, setSuccessMessage] = useState("");
    const {register, handleSubmit, formState: { errors }} = useForm();
    
    const serviceID = "service_utnrqti";
    const templateID = "template_rkw09nn";
    const userID ="user_iZowjCy1Yfr0Vdd0J4cbV";

    const onSubmit = (data, r) =>{
        sendEmail(
            serviceID,
            templateID,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description
            },
            userID
        )
        r.target.reset();
    }

    const sendEmail = (serviceID, templateID, variables, userID) => {
        emailjs.send(serviceID, templateID, variables, userID)
          .then(() => {
              setSuccessMessage("Form sent successfully! i`ll contact you as soon as possible. ");
          }).catch(err => console.error('Something went wrong ${err}'));
      }

    return (
        <div className="contacts">
            <div className="text-center">
            <h1>contact me</h1>
            <p>Please fill out the form and describe you project needs and i`ll contact ypu as soon as possible.</p>
            <span className="success-message">{successMessage}</span>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                <diw className="row">
                    <div className="col-md-6 col-xs-12">
                       {/*NAME INPUT*/}
                       <div className="text-center">
                       <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        name="name"
                        {...register("name", {
                            required: "Please enter your name",
                            maxLength: {
                            value: 20,
                            message:
                                "Please enter a name with fewer than 20 characters",
                            },
                        })}
                            />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                        {errors.name && errors.name.message}
                        </span>
                        {/*PHONE INPUT*/}
                        <div className="text-center">
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Phone Number"
                        name="phone"
                        {...register("phone", {
                            required: "Please enter your phone",
                          })}
                        />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                        {errors.phone && errors.phone.message}
                        </span>
                        {/*EMAIL INPUT*/}
                        <div className="text-center">
                        <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        {...register("email", {
                            required: "Please provide you email",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "invalid Email",
                            }
                          })}
                        />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                        {errors.email && errors.email.message}
                        </span>
                        {/*SUBJECT INPUT*/}
                        <div className="text-center">
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                        name="subject"
                        {...register("subject", {
                            required: "OOPS, you forget to add the subject. ",
                          })}
                        />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                        {errors.subject && errors.subject.message}
                        </span>
                    </div>
                    <div className="col-md-6 col-xs-12">
                        {/*DESCRIPTION*/}
                        <div className="text-center">
                        <textarea
                        type="text"
                        className="form-control"
                        placeholder="Pleas describe shortly you project..."
                        name="description"
                        {...register("description", {
                            required: "Please describe shortly your project needs...",
                          })}
                        />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                        {errors.description && errors.description.message}
                        </span>
                        <button className="btn-main-offer contact-btn" type="submit">contact</button>
                    </div>
                </diw>
                </form>
            </div>
        </div>
    )
}

export default Contacts
