"use client";
import { registerNewUser } from "@/services/actions/user/registerNewUser";
import { TUser } from "@/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const CustomerRegister = () => {
  const { register, handleSubmit } = useForm<TUser>();
  const router = useRouter();
  const onSubmit: SubmitHandler<TUser> = async (data) => {
    if (data?.password !== data?.confirmPassword) {
      return toast.error("Password are not matched", {
        position: "top-center",
      });
    }
    try {
      const result = await registerNewUser(data);
      if (result?.success) {
        toast.success(result?.message, {
          position: "top-center",
        });
        router.replace("/customer/account//login");
      }
    } catch (error) {}
  };
  return (
    <div className="pb-20">
      <h1 className="text-center text-3xl font-semibold text-tertiary bg-fourth py-14">
        Customer Register
      </h1>
      <div className="py-10 container w-full md:w-1/2 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="pt-5">
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <h1 className="text-[15px] text-gray-700 pb-2">First Name</h1>
              <input
                type="text"
                className="w-full outline-none border border-gray-400/50 py-3 px-2"
                placeholder="First Name"
                {...register("firstName", { required: true })}
              />
            </div>
            <div>
              <h1 className="text-[15px] text-gray-700 pb-2">Last Name</h1>
              <input
                type="text"
                {...register("lastName", { required: true })}
                className="w-full outline-none border border-gray-400/50 py-3 px-2"
                placeholder="Last Name"
              />
            </div>
            <div>
              <h1 className="text-[15px] text-gray-700 pb-2">Email </h1>
              <input
                type="email"
                className="w-full outline-none border border-gray-400/50 py-3 px-2"
                placeholder="Enter your Email"
                {...register("email", { required: true })}
              />
            </div>
            <div>
              <h1 className="text-[15px] text-gray-700 pb-2">Mobile Number</h1>
              <input
                type="number"
                className="w-full outline-none border border-gray-400/50 py-3 px-2"
                placeholder="Last Name"
                {...register("mobileNumber", { required: true })}
              />
            </div>
            <div>
              <h1 className="text-[15px] text-gray-700 pb-2">Password</h1>
              <input
                type="password"
                className="w-full outline-none border border-gray-400/50 py-3 px-2"
                placeholder="Enter your password"
                {...register("password", { required: true })}
              />
            </div>
            <div>
              <h1 className="text-[15px] text-gray-700 pb-2">
                Confirm Password
              </h1>
              <input
                type="password"
                className="w-full outline-none border border-gray-400/50 py-3 px-2"
                placeholder="Enter your password"
                {...register("confirmPassword", { required: true })}
              />
            </div>
          </div>
          <div>
            <h1 className="text-[15px] text-gray-700 py-3">
              Forgot Your Password?
            </h1>

            <div className="flex flex-col gap-4">
              <button className="bg-tertiaryLite py-3 w-full uppercase text-primary">
                CREATE ACCOUNT
              </button>
              <Link href={"/customer/account/sign-in"}>
                {" "}
                <div className="bg-tertiaryLite py-3 flex justify-center w-full uppercase text-primary">
                  <span> SIGN In</span>
                </div>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomerRegister;
