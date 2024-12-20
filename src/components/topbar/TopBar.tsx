import DemoTimer from "./DemoTimer"

function TopBar() {
    return (
        <div className='top-bar'>
            <div className='p-1 text-center text-top-bar text-base font-medium'>
                <DemoTimer />
            </div>
        </div>
    )
}

export default TopBar
