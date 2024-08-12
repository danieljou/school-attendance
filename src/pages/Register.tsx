import { useState } from "react";
import { useCreateStudentMutation } from "../store/api/MainApi";
import toast from "react-hot-toast";

type StudentData = {
  First_name: string;
  Last_name: string;
  Email: string;
  Telephone: string;
  Password: string;
  Class_name: string;
  image: File | null; // File type for image upload
};

const Register = () => {
  const [register, { isLoading }] = useCreateStudentMutation(); // Adjust to your actual mutation
  const [data, setData] = useState<StudentData>({
    First_name: "",
    Last_name: "",
    Email: "",
    Telephone: "",
    Password: "",
    Class_name: "",
    image: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setData((prevData) => ({
        ...prevData,
        image: e.target.files?.[0] || null,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("First_name", data.First_name);
    formData.append("Last_name", data.Last_name);
    formData.append("Email", data.Email);
    formData.append("Telephone", data.Telephone);
    formData.append("pass", data.Password);
    formData.append("password", data.Password);
    formData.append("Class_name", data.Class_name);

    if (data.image) {
      formData.append("image", data.image); // Append the image file
    }

    try {
      await register(formData).unwrap(); // Assuming this is how you call your mutation
      // Handle successful registration (e.g., redirect or show a success message)
      toast.success("Created succesfylly");
    } catch (error) {
      console.error("Registration failed:", error);
      toast.error("Error while creating");
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <div className="">
      {/* <div className="col-span-2 bg-blue-800 flex justify-center items-center">
                <img src={Images.logo} className="scale-50" alt="logo" />
            </div> */}

      {/* <div className="absolute p-6 -translate-x-7 bg-black rounded-full top-1/2 left-1/2">
                <AiOutlineArrowLeft className="text-white" />
            </div> */}

      <div className="w-full col-span-2">
        <div className="font-bold mx-auto w-[50%] py-3 rounded-full text-white text-center translate-y-10 bg-primary-light">
          Add student
        </div>

        <div className="h-full centered-container w-full">
          <form className="w-full p-5" onSubmit={handleSubmit}>
            <div className="mb-4 input-container">
              <label htmlFor="First_name">First Name</label>
              <input
                type="text"
                name="First_name"
                id="First_name"
                className="w-full p-2 border rounded"
                value={data.First_name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4 input-container">
              <label htmlFor="Last_name">Last Name</label>
              <input
                type="text"
                name="Last_name"
                id="Last_name"
                className="w-full p-2 border rounded"
                value={data.Last_name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4 input-container">
              <label htmlFor="Email">E-mail address</label>
              <input
                type="email"
                name="Email"
                id="Email"
                className="w-full p-2 border rounded"
                value={data.Email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4 input-container">
              <label htmlFor="Telephone">Phone Number</label>
              <input
                type="tel"
                name="Telephone"
                id="Telephone"
                className="w-full p-2 border rounded"
                value={data.Telephone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4 input-container">
              <label htmlFor="Class_name">Class</label>
              <input
                type="text"
                name="Class_name"
                id="Class_name"
                className="w-full p-2 border rounded"
                value={data.Class_name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4 input-container">
              <label htmlFor="Password">Password</label>
              <input
                type="password"
                name="Password"
                id="Password"
                className="w-full p-2 border rounded"
                value={data.Password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4 input-container">
              <label htmlFor="image">Profile Image</label>
              <input
                type="file"
                name="image"
                id="image"
                className="w-full p-2 border rounded"
                onChange={handleFileChange}
                required
              />
            </div>

            <button type="submit" className="btn-blue w-full">
              {isLoading ? "Registering..." : "Register"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
