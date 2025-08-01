
import React, { useState, useEffect } from 'react';
import './profile.css';
import Header from '../Header/header';
import axios from 'axios';
import { toast } from 'react-toastify';
import EndPoint from '../../Apis/EndPoint';
// import { getCurrentUser } from '../Auth/Auth';

function ProfilePage() {
  const [editMode, setEditMode] = useState(false);
  const [profileImage, setProfileImage] = useState("/assets/user.png");
const currentUser = JSON.parse(sessionStorage.getItem("current-user"));

  const [user, setUser] = useState({
   name: currentUser?.name || "",
    contact: currentUser?.contact || "",
    bio: currentUser?.bio || "",
    country: currentUser?.country || "",
    city: currentUser?.city || "",
    skillToTeach: currentUser?.skillToTeach || "",
    skillToLearn: currentUser?.skillToLearn || "",
    profile: currentUser?.profile || ""
  });

  useEffect(() => {
    // const currentUser = getCurrentUser();
    if (currentUser) {
        setUser(currentUser);
        if (currentUser.profileImage) {
        setProfileImage(currentUser.profileImage);
      }
    }
  }, []);

//   const handleChange = (event)=>{
//       if(event.target.files)
//         setProfileImage(event.target.files[0]);
//     }
const handleSubmit = async (event) => {
  event.preventDefault();
  try {
    const updatedUser = { ...setUser}; 

    const response = await axios.patch(
      EndPoint.USER_PROFILE + `/${user._id}`,
      updatedUser
    );

    toast.success(response.data.message);
    
    // Update local sessionStorage
    sessionStorage.setItem("current-user", JSON.stringify(updatedUser));
  } catch (err) {
    console.error(err);
    toast.error("Oops! Something went wrong..");
  }
};


 const handleImageChange = (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onloadend = () => {
    const base64Image = reader.result;

    // Update state
    setProfileImage(base64Image);

    // Update sessionStorage
    // const currentUser = JSON.parse(sessionStorage.getItem("current-user"));
    if (currentUser) {
      const updatedUser = { ...currentUser, profileImage: base64Image };
      sessionStorage.setItem("current-user", JSON.stringify(updatedUser));
      }
      
       
  };

  reader.readAsDataURL(file);
};


  const toggleEdit = () => {
    setEditMode(!editMode);
  };

    
  const saveChanges = async (event) => {
      try {
        event.preventDefault();
        
      setEditMode(false);
      
          const updatedUser = { ...user, profileImage };
          
          sessionStorage.setItem("current-user", JSON.stringify(updatedUser));
        //   console.log(response.data);
          
        toast.success("Profile updated successfully!");
        // toast.success(response.data.message);
        // setUser({
        //     name: '',
        //     email: '',
        //     bio: '',
        //     contact: '',
        //     country: '',
        //     city: '',
        //     skillToLearn: '',
        //     skillToTeach: '',
        //     profile:''
        // });

       
    } catch (error) {
   
      toast.error("Something went wrong!");
    }
  };

    
  return (
    <>
      <Header />
      <div className="container profile-container py-5">
        <div className="profile-card">
          <div className="text-center mb-4">
            <img
              src={profileImage}
              alt="Profile"
              className="profile-image"
            />
            <h5 className="mt-2">{user.name || "Your Name"}</h5>
            <p className="text-muted">{user.bio || "Your Bio"}</p>
            <button className="btn btn-success btn-sm " onClick={toggleEdit}>
              {editMode ? "Cancel" : "Edit"}
            </button>

          </div>
          <form onClick={handleSubmit}>
            {editMode && (
              <div className="mt-3 mb-3">
                <input
                defaultValue={user.profile} onChange={handleImageChange}
                  type="file"
                  accept="image/*"
                //   value={user.profile}
                //   onChange={handleChange}
                  className="form-control form-control-sm image-input"
                />
              </div>
            )}

            <div className="row g-3">
              <div className="col-md-6">
                <input
                   defaultValue={user.name} onChange={(event)=>setUser({...user,name: event.target.value})}
                  type="text"
                  name="fullName"
                  className="form-control"
                  placeholder="Full Name"
                  value={user.name}
                  
                  readOnly={!editMode}
                />
              </div>
              <div className="col-md-6">
                <input
                defaultValue={user.email} onChange={(event)=>setUser({...user,email: event.target.value})}
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  value={user.email}
                  
                  readOnly={!editMode}
                />
              </div>
              <div className="col-md-6">
                <input
                defaultValue={user.bio} onChange={(event)=>setUser({...user,bio:event.target.value})}
                  type="text"
                  name="bio"
                  className="form-control"
                  placeholder="Bio"
                  value={user.bio}
                  
                  readOnly={!editMode}
                />
              </div>
              <div className="col-md-6">
                <input
                defaultValue={user.contact} onChange={(event)=>setUser({...user,contact:event.target.value})}
                  type="text"
                  name="contact"
                  className="form-control"
                  placeholder="Contact"
                  value={user.contact}
                 
                  readOnly={!editMode}
                />
              </div>
              <div className="col-md-6">
                <input
                defaultValue={user.country} onChange={(event)=>setUser({...user,country: event.target.value})}
                  type="text"
                  name="country"
                  className="form-control"
                  placeholder="Country"
                  value={user.country}
                  
                  readOnly={!editMode}
                />
              </div>
              <div className="col-md-6">
                <input
                defaultValue={user.city} onChange={(event)=>setUser({...user,city: event.target.value})}
                  type="text"
                  name="city"
                  className="form-control"
                  placeholder="City"
                  value={user.city}
                 
                  readOnly={!editMode}
                />
              </div>
              <div className="col-md-6">
                <input
                defaultValue={user.skillToLearn} onChange={(event)=>setUser({...user,skillToLearn:event.target.value})}
                  type="text"
                  name="skillToLearn"
                  className="form-control"
                  placeholder="Skill you want to learn"
                  value={user.skillToLearn}
                 
                  readOnly={!editMode}
                />
              </div>
              <div className="col-md-6">
                <input
                defaultValue={user.skillToTeach} onChange={(event)=>setUser({...user,skillToTeach: event.target.value})}
                  type="text"
                  name="skillToTeach"
                  className="form-control"
                  placeholder="Skill you can teach"
                  value={user.skillToTeach}
                 
                  readOnly={!editMode}
                />
              </div>
            </div>

            {editMode && (
              <div className="text-center mt-4">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={saveChanges}
                >
                  Save Changes
                </button>
              </div>
            )}
            
            <div className='text-end'>
            <button className="btn btn-danger mt-4">Delete My Account</button>
            </div>
                      
          </form>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;