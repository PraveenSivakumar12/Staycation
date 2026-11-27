import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Addhotel.css";

function AddHotelForm({ onClose,onAddHotel }) {
  const [imagePreview, setImagePreview] = useState(null);

  const initialValues = {
    image: null,
    name: "",
    city: "",
    location: "",
    price: "",
    rating: "",
    description: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Minimum 3 characters required")
      .required("Hotel name is required"),

    city: Yup.string().required("City is required"),

    location: Yup.string().required("Location is required"),

    price: Yup.number()
      .typeError("Price must be a number")
      .positive("Price must be greater than zero")
      .required("Price is required"),

    rating: Yup.number()
      .typeError("Rating must be a number")
      .min(1, "Minimum rating is 1")
      .max(5, "Maximum rating is 5")
      .required("Rating is required"),

    image: Yup.mixed()
      .required("Hotel image is required")
      .test(
        "fileType",
        "Only JPG, PNG and WebP images are allowed",
        (value) =>
          !value ||
          ["image/jpeg", "image/png", "image/webp"].includes(value.type),
      )
      .test(
        "fileSize",
        "Image size must be less than 5 MB",
        (value) => !value || value.size <= 5 * 1024 * 1024,
      ),

    description: Yup.string()
      .min(10, "Description must contain at least 10 characters")
      .required("Description is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
  const newHotel = {
    ...values,
    id: Date.now(),
    price: Number(values.price),
    rating: Number(values.rating),
    image: URL.createObjectURL(values.image),
  };
  console.log("New hotel:", newHotel);

  onAddHotel(newHotel);

  alert("Hotel added successfully!");

  resetForm();
  setImagePreview(null);
  onClose();
};

  return (
    <div className="hotel-form-container">
      <div className="hotel-form">
        <h2>Add Your Hotel</h2>
        <p>Enter your hotel details below.</p>
        <button type="button" className="close-form" onClick={onClose}>
          ×
        </button>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue }) => (
            <Form>
              <div className="form-group">
                <label htmlFor="hotel-image">Upload Hotel Image</label>

                <input
                  type="file"
                  id="hotel-image"
                  accept="image/jpeg,image/png,image/webp"
                  onChange={(event) => {
                    const file = event.currentTarget.files[0];

                    setFieldValue("image", file || null);

                    if (file) {
                      setImagePreview(URL.createObjectURL(file));
                    } else {
                      setImagePreview(null);
                    }
                  }}
                />

                <ErrorMessage
                  name="image"
                  component="div"
                  className="error-message"
                />

                {imagePreview && (
                  <img
                    src={imagePreview}
                    alt="Hotel preview"
                    className="image-preview"
                  />
                )}
              </div>
              <div className="form-group">
                <label htmlFor="name">Hotel Name</label>

                <Field
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter hotel name"
                />

                <ErrorMessage
                  name="name"
                  component="div"
                  className="error-message"
                />
              </div>
              <div className="form-group">
                <label htmlFor="city">City</label>

                <Field
                  type="text"
                  name="city"
                  id="city"
                  placeholder="Enter city"
                />

                <ErrorMessage
                  name="city"
                  component="div"
                  className="error-message"
                />
              </div>
              <div className="form-group">
                <label htmlFor="location">Location</label>

                <Field
                  type="text"
                  name="location"
                  id="location"
                  placeholder="Enter hotel location"
                />

                <ErrorMessage
                  name="location"
                  component="div"
                  className="error-message"
                />
              </div>
              <div className="form-group">
                <label htmlFor="price">Price per Hour (₹)</label>

                <Field
                  type="number"
                  name="price"
                  id="price"
                  placeholder="Enter price"
                />

                <ErrorMessage
                  name="price"
                  component="div"
                  className="error-message"
                />
              </div>
              <div className="form-group">
                <label htmlFor="rating">Hotel Rating</label>

                <Field
                  type="number"
                  name="rating"
                  id="rating"
                  placeholder="Enter rating (1-5)"
                  min="1"
                  max="5"
                  step="0.1"
                />

                <ErrorMessage
                  name="rating"
                  component="div"
                  className="error-message"
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Hotel Description</label>

                <Field
                  as="textarea"
                  name="description"
                  id="description"
                  placeholder="Tell us about your hotel"
                  rows="4"
                />

                <ErrorMessage
                  name="description"
                  component="div"
                  className="error-message"
                />
              </div>
              <button type="submit" className="addhotel">
                Submit Hotel
              </button>     
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default AddHotelForm;
