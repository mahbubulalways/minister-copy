"use client";
import { saveTokenLocalStorage } from "@/components/utils/localStorage";
import { loginUser } from "@/services/actions/loginUser";
import { ILogin } from "@/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const CustomerSignIn = () => {
  const { register, handleSubmit } = useForm<ILogin>();
  const router = useRouter();
  const onSubmit: SubmitHandler<ILogin> = async (data) => {
    try {
      const result = await loginUser(data);
      console.log(result);
      if (result?.success) {
        saveTokenLocalStorage(result?.data?.token);
        toast.success(result?.message, {
          position: "top-center",
        });

        // Reload the page and then navigate to "/"
        router.replace("/");
        router.refresh(); // This triggers a client-side reload
      }
    } catch (error) {
      toast.error("Something went wrong", {
        position: "top-center",
      });
      console.log(error);
    }
  };
  return (
    <div>
      <h1 className="text-center text-3xl font-semibold text-tertiary bg-fourth py-14">
        Customer Login
      </h1>
      <div className="py-10 container w-full md:w-1/2 mx-auto">
        <h1 className="text-2xl font-semibold ">Registered Customers</h1>
        <p className="text-gray-700 pt-2">
          If you have an account, sign in with your email address.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="pt-5 flex flex-col gap-5"
        >
          <div>
            <h1 className="text-[15px] text-gray-700 pb-2">Email</h1>
            <input
              type="email"
              className="w-full outline-none border border-gray-400/50 py-3 px-2"
              placeholder="Enter your email"
              {...register("email", { required: true })}
              defaultValue={"john.doe@example34.com"}
            />
          </div>
          <div>
            <h1 className="text-[15px] text-gray-700 pb-2">Password</h1>
            <input
              type="password"
              className="w-full outline-none border border-gray-400/50 py-3 px-2"
              placeholder="Enter your password"
              {...register("password", { required: true })}
              defaultValue={"securePassword123"}
            />
          </div>
          <h1 className="text-[15px] text-gray-700">Forgot Your Password?</h1>

          <div className="flex flex-col gap-4">
            <button className="bg-tertiaryLite py-3 w-full uppercase text-primary">
              SIGN In
            </button>
            <Link href={"/customer/account/register"}>
              {" "}
              <div className="bg-tertiaryLite py-3 flex justify-center w-full uppercase text-primary">
                <span>CREATE ACCOUNT</span>
              </div>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomerSignIn;
