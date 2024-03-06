
import '../styles/Navbar.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Navbar(){
    return (
        <div>
        <DropdownButton className='navButton' title='Examples'>
            <Dropdown.Item href='#/action1'>React</Dropdown.Item>
            <Dropdown.Item href='#/action2'>React/MERN</Dropdown.Item>
            <Dropdown.Item href='#/action3'>MySQL</Dropdown.Item>
            <Dropdown.Item href='#/action4'>Javascript</Dropdown.Item>
            <Dropdown.Item href='#/action5'>Other</Dropdown.Item>
        </DropdownButton>
        <DropdownButton className='navButton' title='About'>
            <Dropdown.Item href='#/action1'>Bio</Dropdown.Item>
            <Dropdown.Item href='#/action2'>Education</Dropdown.Item>
            <Dropdown.Item href='#/action3'>Resume</Dropdown.Item>
            
        </DropdownButton>
        <DropdownButton className='navButton' title='Contact'>
            <Dropdown.Item href='#/action1'>Form</Dropdown.Item>
            <Dropdown.Item href='#/action2'>Other</Dropdown.Item>
        </DropdownButton>
        </div>
    );        
}

export default Navbar;