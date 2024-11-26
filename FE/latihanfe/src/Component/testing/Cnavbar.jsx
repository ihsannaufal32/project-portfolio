import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'

function Cnavbar() {
    return(
    <div className="bg-red-300">
        <div className="flex flex-wrap justify-center">
            <Popover>
                <PopoverButton className="bg-white text-black outline outline-1 outline-black">
                    <p>Menu</p>
                </PopoverButton>
            </Popover>
        </div>
    </div>
    )
};

export default Cnavbar