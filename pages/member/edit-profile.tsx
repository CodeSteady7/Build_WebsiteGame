import Image from "next/image";
import { useEffect, useState } from "react";
import Input from "../../components/atoms/Input";
import Sidebar from "../../components/organisms/Sidebar";
import Cookies from "js-cookie";
import { JWTPayloadTypes, UserTypes } from "../../services/data-types/index";
import jwt_decode from "jwt-decode";
import { updateProfile } from "../../services/member";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export default function EditProfile() {
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    avater: "",
  });
  console.log("user =>", user);

  const router = useRouter();
  const IMG = process.env.NEXT_PUBLIC_IMG;
  const [imagePreview, setImagePreview] = useState("");
  // console.log("imagePreview", imagePreview);
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const jwtToken = atob(token);
      const payload: JWTPayloadTypes = jwt_decode(jwtToken);
      const userFromPayload: UserTypes = payload.player;
      userFromPayload.avater = `${IMG}/${userFromPayload.avater}`;
      setUser(userFromPayload);
    }
  }, []);

  const onSubmit = async () => {
    const data = new FormData();

    data.append("image", user.avater);
    data.append("name", user.name);
    // console.log("formdata => ", ...data);
    const response = await updateProfile(data, user.id);
    if (response.error) {
      toast.error(response.message);
    } else {
      toast.success(response.message);
      console.log("response ", response.data);
      Cookies.remove("token");
      router.push("/sign-in");
    }
  };
  return (
    <section className='edit-profile overflow-auto'>
      <Sidebar activeMenu='settings' />
      <main className='main-wrapper'>
        <div className='ps-lg-0'>
          <h2 className='text-4xl fw-bold color-palette-1 mb-30'>Settings</h2>
          <div className='bg-card pt-30 ps-30 pe-30 pb-30'>
            <form>
              <div className='photo d-flex'>
                <div className='image-upload'>
                  <label htmlFor='avatar'>
                    {imagePreview ? (
                      <Image
                        src={imagePreview}
                        width={90}
                        height={90}
                        alt='upload'
                      />
                    ) : (
                      <Image
                        src='/img/avatar-1.png'
                        // src={user.avater}
                        width={90}
                        height={90}
                        alt='upload'
                      />
                    )}
                  </label>
                  <input
                    id='avatar'
                    type='file'
                    name='avatar'
                    accept='image/png, image/jpeg'
                    onChange={(event) => {
                      const img = event.target.files[0];
                      setImagePreview(URL.createObjectURL(img));
                      let imgConvert = URL.createObjectURL(img);
                      return setUser({
                        ...user,
                        avater: imgConvert,
                      });
                    }}
                  />
                </div>
              </div>
              <div className='pt-30'>
                <Input
                  label='Full Name'
                  value={user.name}
                  onChange={(event) =>
                    setUser({
                      ...user,
                      name: event.target.value,
                    })
                  }
                />
              </div>
              <div className='pt-30'>
                <Input label='Email Address' disabled value={user.email} />
              </div>
              {/* <div className='pt-30'>
                <Input label='Phone' />
              </div> */}
              <div className='button-group d-flex flex-column pt-50'>
                <button
                  type='button'
                  className='btn btn-save fw-medium text-lg text-white rounded-pill'
                  onClick={onSubmit}
                >
                  Save My Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </section>
  );
}
