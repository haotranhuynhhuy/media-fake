import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import Icon from "../Icon";
const people = [
  { name: "Công khai", iconName: "Earth" },
  { name: "Bạn bè", iconName: "usergroup" },
  { name: "Chỉ mình tôi", iconName: "locked" },
];

export default function DropdownCheckbox() {
  const [selected, setSelected] = useState(people[0]);

  return (
    <>
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          <Listbox.Button className="relative flex items-center gap-2 max-w-40 cursor-default rounded-md bg-gray-200 py-1 pl-3 pr-10 text-left shadow-md sm:text-sm">
            <Icon iconName={selected.iconName} size="18x18" />
            <span className="block truncate font-bold">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <Icon iconName="dropDown" size="12x12" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 max-w-44 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {people.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 font-bold ${
                      active ? " text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <div className="flex gap-2">
                        <Icon iconName={person.iconName} size="18x18" />
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {person.name}
                        </span>
                      </div>

                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <Icon iconName="checked" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </>
  );
}
