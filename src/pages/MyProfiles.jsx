import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { API_URL } from "../config";

function MyProfiles() {
  const storedUser = JSON.parse(localStorage.getItem("userData")) || {};

  const [userData, setUserData] = useState({
    name: storedUser.name || "",
    image: assets.profile_pic,
    email: storedUser.email || "",
    phone: storedUser.phone || "",
    address: storedUser.address || "",
    gender: storedUser.gender || "Male",
    age: storedUser.age || "",
  });

  const [isEdit, setIsEdit] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch profile data from /profile endpoint
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.post(
          `${API_URL}/profile`,
          {},
          {
            withCredentials: true, // Include cookies in request
          }
        );

        const profileData = response.data;

        // Combine localStorage data (name, email) with API data (phone, age, address, gender)
        setUserData((prev) => ({
          ...prev,
          phone: profileData.phone || prev.phone,
          age: profileData.age || prev.age,
          address: profileData.address || prev.address,
          gender: profileData.gender || prev.gender,
        }));
      } catch (error) {
        console.error("Error fetching profile:", error);
        console.error("Error details:", error.response?.data);
        console.error("Error status:", error.response?.status);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  // Save profile data to backend
  const handleSaveProfile = async () => {
    try {
      const profileData = {
        phone: userData.phone,
        age: userData.age,
        address: userData.address,
        gender: userData.gender,
      };

      await axios.post(`${API_URL}/profile`, profileData, {
        withCredentials: true, // Include cookies in request
      });

      setIsEdit(false);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile. Please try again.");
    }
  };

  return (
    <div className="pt-5">
      <div>
        <img src={userData.image} alt="" /> <img src="" alt="" />
      </div>
      <div className="mt-3 w-1/2">
        {isEdit ? (
          <input
            className="border border-[var(--grey4)] w-full p-2 mt-1 rounded"
            type="text"
            value={userData.name}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        ) : (
          <h2 className="border-b border-[var(--line1)] w-1/2 text-[var(--black1)] font-medium text-2xl pb-2">
            {userData.name}
          </h2>
        )}

        <p className="text-[var(--grey6)] text-sm underline mt-4 pb-3">
          CONTACT INFORMATION
        </p>
        <p className="mb-2 flex items-center gap-2">
          <span className="text-[var(--grey1)] text-base w-1/6">Email id:</span>
          {/* {isEdit ? (
            <input
              className="border border-[var(--grey4)] w-full p-2 mt-1 rounded"
              type="text"
              value={userData.email}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          ) : (
            <span className="text-[var(--blue5)]">{userData.email}</span>
          )} */}
          <span className="text-[var(--blue5)]">{userData.email}</span>
        </p>
        <p className="mb-2 flex items-center gap-2">
          <span className="text-[var(--grey1)] text-base w-1/6">Phone:</span>
          {isEdit ? (
            <input
              className="border border-[var(--grey4)] w-full p-2 mt-1 rounded"
              type="text"
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          ) : (
            <span className="text-[var(--blue5)]">{userData.phone}</span>
          )}
        </p>
        <p className="mb-2 flex items-center gap-2">
          <span className="text-[var(--grey1)] text-base w-1/6">Address: </span>
          {isEdit ? (
            <input
              className="border border-[var(--grey4)] w-full p-2 mt-1 rounded"
              type="text"
              value={userData.address}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, address: e.target.value }))
              }
            />
          ) : (
            <span>{userData.address}</span>
          )}
        </p>

        <p className="text-[var(--grey6)] text-sm underline mt-6 pb-3">
          BASIC INFORMATION
        </p>
        <p className="mb-2 flex items-center gap-2">
          <span className="text-[var(--grey1)] text-base w-1/6">Gender:</span>
          {isEdit ? (
            <select
              className="border border-[var(--grey4)] w-full p-2 mt-1 rounded"
              value={userData.gender}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <span className="text-[var(--blue5)]">{userData.gender}</span>
          )}
        </p>
        <p className="mb-2 flex items-center gap-2">
          <span className="text-[var(--grey1)] text-base w-1/6">Age:</span>
          {isEdit ? (
            <input
              className="border border-[var(--grey4)] w-full p-2 mt-1 rounded"
              type="text"
              value={userData.age}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, age: e.target.value }))
              }
            />
          ) : (
            <span className="text-[var(--blue5)]">{userData.age}</span>
          )}
        </p>
      </div>
      <div className="mt-5">
        {isEdit ? (
          <button
            className="border border-[var(--blue1)] px-4 py-2 rounded-full cursor-pointer"
            onClick={handleSaveProfile}
          >
            Save information
          </button>
        ) : (
          <button
            className="border border-[var(--blue1)] px-4 py-2 rounded-full cursor-pointer"
            onClick={() => setIsEdit(true)}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
}

export default MyProfiles;
