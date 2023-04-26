import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Icon from "../../BaseComponents/Icon";
import Image from "../../BaseComponents/Image";
import DropdownCheckbox from "../../BaseComponents/DropdownCheckbox";
import Button from "../../BaseComponents/Button";
import { useForm } from "../../../utils/hooks";
import TextArea from "../../BaseComponents/TextArea";

export default function PostForm({ img }: any) {
  const { value, onChange } = useForm({
    body: "",
  });
  const [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center pt-20 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[32rem] transform rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <div className="flex gap-2 items-center">
                      {img ? (
                        <Image src={img} alt="avatar header" />
                      ) : (
                        <Icon iconName={"user"} size="38x38" />
                      )}
                      <div className="flex flex-col">
                        <Dialog.Title className="font-medium leading-6 text-gray-900">
                          Hao Tran
                        </Dialog.Title>
                        <DropdownCheckbox />
                      </div>
                    </div>
                    <button onClick={closeModal}>
                      <Icon iconName="close" isPointer size="40x40" />
                    </button>
                  </div>
                  <div className="mt-2">
                    <TextArea
                      id="body"
                      name="body"
                      placeholder="Bạn muốn chia sẻ điều gì?"
                      rows={9}
                      handleOnchange={onChange}
                      value={value.body}
                    />
                  </div>
                  <div className="border rounded-lg p-2 flex justify-between">
                    <p>Thêm vào bài viết của bạn</p>
                    <div className="image-upload">
                      <label htmlFor="file-input">
                        <Icon iconName="addimage" />
                      </label>
                      <input id="file-input" type="file" className="hidden" />
                    </div>
                  </div>

                  <div className="mt-4">
                    <Button
                      type="button"
                      className="text-white bg-green-500 font-bold"
                      onClick={closeModal}
                    >
                      Chia sẻ
                    </Button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
