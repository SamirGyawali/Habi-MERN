import React, { useState } from "react";
import "./newPostPage.scss";
import apiRequest from "../../components/lib/apiRequest";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import UploadWidget from "../../components/uploadWidget/UploadWidget";

const NewPostPage = () => {
  const [value, setValue] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputs = Object.fromEntries(formData);

    try {
      const res = await apiRequest.post("/posts", {
        postData: {
          title: inputs.title,
          price: parseInt(inputs.price),
          address: inputs.address,
          city: inputs.city,
          bedroom: parseInt(inputs.bedroom),
          bathroom: parseInt(inputs.bathroom),
          type: inputs.type,
          property: inputs.property,
          latitude: inputs.latitude,
          longitude: inputs.longitude,
          images: images,
        },
        postDetail: {
          desc: value,
          utilities: inputs.utilities,
          pet: inputs.pet,
          income: inputs.income,
          size: parseInt(inputs.size),
          school: parseInt(inputs.school),
          bus: parseInt(inputs.bus),
          restaurant: parseInt(inputs.restaurant),
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="newPage">
      <span>Create a new Post</span>
      {error && <span>error</span>}
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          {/* Section: Basic Details */}
          <div className="form-section">
            <span>Basic Details</span>
            <div className="item">
              <label htmlFor="title">Property Title</label>
              <input type="text" id="title" name="title" />
            </div>
            <div className="form-section-b">
              <div>
                <label htmlFor="price">Price (NRP/Month)</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  placeholder="Enter price"
                  required
                />
              </div>
              <div className="item">
                <label htmlFor="type">Type</label>
                <select name="property">
                  <option value="room">Room</option>
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="condo">Condo</option>
                  <option value="land">Land</option>
                </select>
              </div>
              <div className="item">
                <label htmlFor="type">Purpose</label>
                <select name="type">
                  <option value="rent" defaultChecked>
                    Rent
                  </option>
                  <option value="buy">Buy</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section: Location Details */}
          <div className="form-section">
            <span>Location Details</span>
            <div className="item">
              <label htmlFor="">City</label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="Enter City"
                value={"Kathmandu"}
              />
            </div>
            <div className="form-section-b">
              <div className="item">
                <label htmlFor="">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Enter address"
                  required
                />
              </div>
              <div className="item">
                <label htmlFor="">Latitude</label>
                <input
                  type="text"
                  id="latitude"
                  name="latitude"
                  placeholder="Latitude"
                  required
                />
              </div>
              <div className="item">
                <label htmlFor="">Longitude</label>
                <input
                  type="text"
                  id="longitude"
                  name="longitude"
                  placeholder="longitude"
                  required
                />
              </div>
            </div>
            <div className="form-section-c">
              <div className="item">
                <label htmlFor="school">School (meter away) </label>
                <input type="number" id="school" name="school" min={0} />
              </div>

              <div className="item">
                <label htmlFor="bus">Bus (meter away)</label>
                <input type="number" id="bus" name="bus" min={0} />
              </div>
              <div className="item">
                <label htmlFor="restaurant">Restaurant (meter away)</label>
                <input
                  type="number"
                  id="restaurant"
                  name="restaurant"
                  min={0}
                />
              </div>
            </div>
          </div>

          {/* Section: Property Features */}
          <div className="form-section">
            <span>Property Features</span>
            <div className="property-features">
              <div className="item">
                <label htmlFor="">Bedroom</label>
                <input
                  type="number"
                  id="bedroom"
                  name="bedroom"
                  placeholder="Number of bedrooms"
                />
              </div>
              <div className="item">
                <label htmlFor="">Bathroom</label>
                <input
                  type="number"
                  id="bathroom"
                  name="bathroom"
                  placeholder="Number of bathrooms"
                />
              </div>
              <div className="item">
                <label htmlFor="size">Total Size (sqft)</label>
                <input min={0} id="size" name="size" type="number" />
              </div>
            </div>
          </div>

          {/* Additional Details */}
          <div className="form-section">
            <span>Additional Details</span>
            <div className="form-section-additional-details">
              <div className="item" id="name">
                <label htmlFor="">Payment Policy</label>
                <select name="payment" id="">
                  <option value="before">Before Month Starts</option>
                  <option value="after">After Month End</option>
                </select>
              </div>

              <div className="item" id="name">
                <label htmlFor="">Utilities Policy</label>
                <select name="utilities" id="">
                  <option value="owner">Owner is responsible</option>
                  <option value="tenant">Tenant is responsible</option>
                  <option value="shared">Shared</option>
                </select>
              </div>

              <div className="item" id="name">
                <label htmlFor="">Pet Policy</label>
                <select name="pet" id="">
                  <option value="allowed">Allowed</option>
                  <option value="not-allowed">Not Allowed</option>
                </select>
              </div>
            </div>
            <div className="item" id="name">
              <label htmlFor="">Post Details</label>
              <ReactQuill
                theme="snow"
                onChange={setValue}
                value={value}
                style={{
                  Height: "200px",
                  padding: "3px",
                  Width: "700px",
                }}
              />
            </div>
          </div>
          <div className="form-section">
            <span>Upload Images</span>
              <p>Note: Size smaller than 3MB</p>
            <div className="image">
                {images.map((image, index) => (
                  <img className="scroll-images"src={image} key={index} alt="" />
                ))}
              <UploadWidget
                uwConfig={{
                  cloudName: "dp4fh3lcj",
                  uploadPreset: "HabiEstate",
                  multiple: true,
                  maxImageFileSize: 2000000,
                  folder: "posts",
                }}
                setState={setImages}
              />
            </div>
          </div>
          <button>Post</button>
        </form>
      </div>
    </div>
  );
};

export default NewPostPage;
