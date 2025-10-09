import React, { useState } from "react";
import { assets } from "../assets/assets";

function MyProfiles() {
  const [userData, setUserData] = useState({
    name: "Edward",
    image: assets.profile_pic,
    email: "sunil@gmail.com",
    phone: "9876543210",
    address: "12th Cross, Richmond Circle, Church Road, England",
    gender: "Male",
    age: "24",
  });

  const [isEdit, setIsEdit] = useState(true);

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
            onClick={() => setIsEdit(false)}
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
