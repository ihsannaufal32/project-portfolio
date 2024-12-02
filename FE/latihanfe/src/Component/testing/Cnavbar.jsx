import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'

function Cnavbar() {
    return(
    <div className="bg-red-300">
        <div className="flex flex-wrap justify-start">
            <Popover>
                <PopoverButton className="bg-white text-black outline outline-1 outline-black">
                    <p>Menu</p>
                </PopoverButton>
                <PopoverPanel transition className="bg-yellow">
                    <h1>cek</h1>
                    <h2>halo</h2>
                    <h3>testbuildjenkins</h3>
                </PopoverPanel>
            </Popover>
        </div>
    </div>
    )
};

export default Cnavbar