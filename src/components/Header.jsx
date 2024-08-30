import LogoutIcon from '@mui/icons-material/Logout';

function Header(){
    return(
        <header className="flex flex-row justify-between items-center p-2 w-full h-16 bg-slate-700 text-white">
            <h1>Py_React</h1>
            <div className="flex flex-row gap-2 justify-center items-center">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>
            <div className="flex flex-row gap-2 justify-center items-center">
                <p><LogoutIcon /></p>
            </div>
        </header>
    )
}
export default Header