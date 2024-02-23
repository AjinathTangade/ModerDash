import React from "react";
import "@flaticon/flaticon-uicons/css/all/all.css";
import { Link } from "react-router-dom";
function EmailMeassageBox() {
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <div className="flex gap-4 border-b px-7 py-5">
          <Link to="">
            <span>
              <i className="fi fi-rr-star"></i>
            </span>
          </Link>
          <Link to="">
            <span>
              <i class="fi fi-rr-exclamation"></i>
            </span>
          </Link>
          <Link to="">
            <span>
              <i class="fi fi-rr-trash"></i>
            </span>
          </Link>
        </div>
        <div className="px-5 py-5">
          <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <div className="h-14 w-14">
                <img src="/user-1.jpg" alt="user-1" className="rounded-full" />
              </div>
              <div>
                <h3 className="font-semibold text-sm group-hover:text-indigo-500">
                  Alexandra Flintoff
                </h3>
                <p className="text-sm text-gray-500 group-hover:text-indigo-400">
                  hello@loremipsum.com
                </p>
              </div>
            </div>
            <div>
              <p className="text-xs text-white bg-blue-500 px-2 py-0.5 rounded-full">
                Promotional
              </p>
            </div>
          </div>
          <div className="mt-7 border-b pb-6">
            <div className="">
              <h2 className="text-lg font-semibold">
                Kindly check this latest updated
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sm mt-4">Hello Andrew,</p>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                bibendum hendrerit lobortis. Nullam ut lacus eros. Sed at luctus
                urna, eu fermentum diam. In et tristique mauris.
              </p>
              <p className="text-sm">
                Ut id ornare metus, sed auctor enim. Pellentesque nisi magna,
                laoreet a augue eget, tempor volutpat diam.
              </p>
            </div>
            <div className="mt-4">
              <p className="text-sm">Regards,</p>
              <h4 className="text-md font-medium">Alexandra Flintoff</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 h-16 flex items-center border-t">
        <div className="flex gap-10">
          <Link className="flex items-center gap-2 text-sm">
            <i className="fi fi-rr-undo-alt"></i>Reply
          </Link>
          <Link className="flex items-center gap-2 text-sm">
            <i class="fi fi-rr-redo-alt"></i>Forward
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EmailMeassageBox;
