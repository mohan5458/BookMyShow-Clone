import { Disclosure } from '@headlessui/react'
import { BiChevronDown } from "react-icons/bi"

function PlaysFilter(props) {
    return (
        <Disclosure>
            {({ open }) => (
                <>
                    <Disclosure.Button className="p-4 flex items-center gap-3 border border-gray-300 rounded-lg my-4 bg-gray-100">
                        <BiChevronDown className={open ? 'rotate-180 transform' : ''} />
                        <div className='w-56 flex justify-between gap-auto text-sm'>
                            <span className={open ? "text-red-600" : "text-gray-950"}>
                                {props.title}
                            </span>
                            <span className='text-gray-600 text-sm'>clear</span>
                        </div>
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-gray-500">
                        <div className='flex items-center gap-3 flex-wrap p-4 '>
                            {props.tags.map((tag) => (
                                <>
                                    <div className='border border-gray-300 px-3 py-1'>
                                        <span className='text-red-600 text-sm'>{tag}</span>
                                    </div>
                                </>
                            ))

                            }
                        </div>
                    </Disclosure.Panel>
                </>
            )}

        </Disclosure>
    );
};

export default PlaysFilter;