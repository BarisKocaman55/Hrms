import React, { useState, useEffect } from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import { Row, Col, Container, Button, Dropdown, DropdownButton, Form, ListGroup } from 'react-bootstrap';
import CityService from '../../services/cityService.js';
import { useHistory } from "react-router-dom";
import JobPostingService from "../../services/jobPostingService"

export default function EmployerJobForm() {

    let jobAddService = new JobPostingService();

    const JobAddRequirements = Yup.object().shape({
        jobId: Yup.string().required("This field is required!!!"),
        jobDescription: Yup.string().required("This field is required!!!"),
        availablePost: Yup.number().min(1, "Available Position cant less then 1!!!").required("This field is required!!!"),
        minSallary: Yup.number().min(0, "Min Sallary cant less then 0"),
        maxSallary: Yup.number().min(0, "Max Sallary cant less then 0").required("This field is required!!!"),
        publishDate: Yup.date().nullable(),
        workWay: Yup.string().required("This field is required!!!"),
        workTime: Yup.string().required("This field is required!!!")
    });

    const history = useHistory();

    const formik = useFormik({
        initialValues: {
            jobTitle: "",
            jobDescription: "",
            availablePos: "",
            minSallary: "",
            maxSallary: "",
            publishDate: "",
            workWay: "",
            workTime: "",
        },

        validationSchema: JobAddRequirements,
        onSubmit: (values) => {
            jobAddService.addJob(values).then(result => console.log(result.data.data))
            alert("Job Added After Approvel of System Personal!!!");
            history.push("/employerpage")
        },
    });

    const [] = useState([]);
    const [] = useState([]);


    return (
        <div>
            
        </div>
    )
}
