import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { Card, Row , Col} from 'antd';
import { Menu } from 'antd';
import {
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Input } from 'antd';
const { Search } = Input;

const { SubMenu } = Menu;

class User extends React.Component {
  static defaultProps = {
    name: 'John Doe',
    email: 'JohnDoe@example.com',
    pic: 'picture.jpg'
  }

  static propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    pic: PropTypes.string
  }

  render() {
    const {name, email, pic, job} = this.props;
    return (
      <Card title={name} style={{ width: 300 }}>
        <img alt="" src={pic} style={{maxWidth: '100%', height: 200}}></img>
        <p>{email}</p>
        <p>{job}</p>
      </Card>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          name: 'Naruto Uzumaki',
          email: 'hokage@konoha.gov',
          pic: 'https://vignette.wikia.nocookie.net/naruto/images/4/42/Naruto_Part_III.png/revision/latest/scale-to-width-down/300?cb=20180117103539',
          job: 'Project Manager'
        },
        {
          name: 'Sasuke Uchiha',
          email: 'sasuke@konoha.gov',
          pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMrmfXsmvbR1rYFRFwX_2AEc7127qgeB86_eoLd7b9Mn0qfaUx',
          job: 'Bussines Analyst'
        },        
        {
          name: 'Himawari Uzumaki',
          email: 'himawari@konoha.gov',
          pic: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIRDxUQEBAVDxUPDw8PEBAPEBAPDxUQFRUWFhUVFRUYHSggGBolHRUVITEhJSktLi4uFx8zODMsNygtLi0BCgoKDg0OFxAQGi0fIB8tLS0tLy0tLi0tLS0tLS0tLS0rLS0tLS0rLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0rK//AABEIAMIBBAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQIEAwUGBwj/xABHEAACAQIDAwkFBQYEAwkAAAABAgADEQQSIQUxUQYTIkFhcYGRoTJTscHRBxRCUqJUcoKSsuEVI2LwM9LxFhckRGNlc4OT/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAECAwQF/8QAJhEAAgIBBAICAgMBAAAAAAAAAAECEQMEEiExIkETUTKBFEJhBf/aAAwDAQACEQMRAD8A8wjhHJMRRwhBAWjhCAEIQgBLWGo/iPgPnL+xNlc4wZx0TqBxUbyezq/6TocXRQlKSqozNmaygdBdZeMfZpGPs5pVJNgCe4XmR8I4XMUYAbyQQJ0lABqzMNBTAprbQXOrfISvtzEDIEDDpOL2INgOMvRc0zYGoE5wrZTaxuL67tI8ZgHpAF7dK9gDczZ7Rx1OyIrZgrqWsD7KyltfHCqVyggKDvtvMA18IQkAIQhJAQhCQCdGkXYKLXOgubTMMDULFAtym8XEroxBBG8EEd83lTFpnp1lYXYBKi31167f76pINNWoshswKngZiZbixnS7apdFaq76ZB8Jap06dRA2RSGF/ZEUQcFVp5TbyMhOpbZSM70WFiRnpPc6Dh2zm69EoxRhYqbETOSozkqMUcISpUUIQgBFHFAFHFHAIiOKOCQjtC0doIC0IR2gCtNjsnACoS9Q5aae11FjvyiUqdIsfiZdVbCwloovGJuqO1kQEhczN1DRVUaKo7pUq7Tc1DUXokqF01sPGUYlmhoTaoSTcnU3Ou8yMIQAh3a90Js+TWG53F06f5ucH6GkN0rJSt0ayEZFtD1aGKCAhCEAIQhACEIQDJzzWtmNuFzaWcHtR6a5RYgG+o4ylI9ffp/v1kg2dbarMyPlAKHeCdR1iYttVqdZQ6gq66EWuGXv4iU4SHyRVmviljEUrajxmCZtUZNUKKShIIIwjhAIwjhAFaMRx2gChJQgCk6dMnd4mSpUr9g4/SWlW2gllGy8Y/YIoAsI4QlzQTbvCMRN8x8Y4ARA6nssPT+8cubQw+RaP/qYcVD4u9vQCAU50f2f0s20KY4LUP6bfOc5Ov8AstS+0Qfy0Kp+A+crk/Fl8f5I0nKfC81ja9O1gteoQP8ASxzD0ImrnY/ang8mP5y2leij/wAS3Q+gXznHRB3FETVSYQhCXKhCTo0Wdgq6k3sONgTb0kJACEIQAib5j6RxNugDhCEADKtalbUbvhLUDDVkNWUDFM1WjbUbvhMdpk+DJqiMUkRFaCBRR2igEgI4RwAmXD0wd+tuqYpJXy6+fdJXZMey5CJTcXHXHNDYIQhJAm+Yjib5iOQAm75UU8pww/8Ab8KfMMfnNfs3Z74ioKdNSSd5Cs1h3AEnuE9Nqcl6tc0yaNKhzNClhxUxI+8VSqCwbmQebU795aZzmotGkItpnlmHw71DamjVDwRSx9J3v2bbCxNHFmrWoPSTmXUNUGXpErYWOvUZ0yck6gW3+JYhBwoLRw6eCoskvJrEprS2riLjqrrTrp4ggTKWW1RpHFTsqfaRyfq4unSbDpzj0nZSMyqcjDfcnqKjznF0/s8x5300X96qnyvPUcJicQnRxVNXG7n8PmK/x0z0l7xcd02gmccsoqkXeOMnbPIR9m2N40R/9jf8sf8A3a4381H/APR/+WeuyNRwoJJsBJ+eQ+GJ5dsjkDjKOJo1W5plp1qbtaob5QwvoRwvNftrkJi6dVzRo87TzsaZRlLZL6XW972nf4nF7RrtbC0aeFp3sK2MuarDitJfZH73pENibQOr7VIPCnhKKr6y3yyu3RX449I8bxWDqUjlq03pnhURkPrMdSiUsrb8qN3hlDA+RE9qbZONy5WxVHGKd9PF4VVBH7yHTyMp7Q5JYfEgCtQOEqKi01eg4ekQNAB/cAy6zr2UeF+jx6J906LlbyUqYAqWdaqVCyoygq1xrZl6vOc6d3lNlJNWjJpp0xwhCWICEIQAlSoBew6t/fJ4iv8AhXeevhMarYSkmUmxWiMlFKGREiElCCRRxCStBAQjjAgGOnVKGx1EuowIuNZVqJcfCV0dkPD4S6ZrGVmzhI02JFyLXkpYuJ93iPjETw/sJ02yOROJxWGOIp5ADfm0diHcDQ5dLDUEakTnlw7B+aKlWD82VIswa9rEcZCknwiXFo9r5AYAUdnUdLNVU1nNtSXNxf8AhyzeYjFKgJPULk6BQOJY2UeJmt2xtJdn4TPzNSstCkFC0UzGyrbpflGm+cXidnV8clKvjHDfeqqJQpZiMJRVhm0H42tvY8dJyRg8kjpnkWOJ1n/bDB5sn3zDA7rHEA+tres29DGq4DAqytuqU3FSmf4hunAbZ2TgMCAuKqKMzZFa3RJsL2UA2AvNfjdiPhqqVcBWNHndBktzTneBUT2WU8bdc6ZaPxuMrOSGvuVSjR6xCa3k/jjWoAuuR06FROtWAB8QQQQesEHsmynCegghCEEkalQKLsbdXjwHEyljdr0qIvVenRB3GvVSlfuB1mk5d42rTpZcM/N1WBvWsDzVPry33MxsNO/qE5XaOwcPgqS18fVvzoQh9a1ViwuMzEEk6HsnRhwfJy3SOXPqfj4Ss9EwW2qNb/h1adX/AOGrTq+im/pL4NxpqDPJsfyeoc0uKpWqJ0Kiso5t8p6wy2P0m92dtjF4TFUsE6tj0xBIos7BMTSC2zc6SOkoBvc6yc2meOqdlcGrWT1Rm+1ulfB02/LiVHgyP9BPJbT2f7Tad9mufyVKLfqy/Oef8kuS64pWrVqjU6aNzSimM1RntmNriwABEnFJKFsvli3OkczCXtubO+7YmpQzZxTbotuzIQGU+IIlGbp2rMGqYEypXxXUvn9JblVKIUnjr5SG6KydIhTp27zJyVorShi3ZG0VpO0VoBC0JK0JAEBHCMCAAEdowI5IFaSWkCbnq+MQ4XtM47JaKLwj7CEIS5qezciqTHC02U2KUKQTqU3QOQewlj5zmtv4MPt3DsosK5w9Ui1tUYhwe0c3rOl5K4i+yMMymxamiEjeMpKt/SR4yquzmbamGrb0QVweyoaZPzB8TxnCpVJ/s7HG4L9HaMARY6gggg7iDOZxOyGp4UYdfZwtYVsKSdObFzzRPUQGIF99hOmhIhNwlaGTGpqmcRtnZGFxqoK6hwjZ0s5Ui+8adR00mxw+FR6lFOiEpOHINsoRFIC+ZAnTQnXLWtp+PZwx/wCek15dGDC4Zad8puCeibdILqcpPWASbd8zwhOFu2eilSoISFWoFsT1kDzk5BJrtqbNp1UqBzY1KRpoSpKq2/MbddwvgonM4nZ9HFYdaOJphglgVJIIdOjcEa8desGdvCdWHUvGqqzkz6RZXd0zjmwKMlPCUwEQ5V09lKKEE+OlgN5Jm+oYANi2xbLY83zFIW1FO92J7TZfIzZwkZtQ8lcUTp9LHF7s0HL2nm2ZiBwRW/ldT8pT5A7OA2dTuBeoGccRmNwe82HgBN/tjA/eMPUoE251MhPAGazCrkqKlNuilYImu9NxU8bAkfwzHd40dG3ys8q5atfHOPy08Mp7xRSaOXdvYvnsdiag3HEOFtuyqcq+gEpTtgvFHHN3JhIVF6x/sRs4G8gTE+LUbtZZlHyEVoISdSLX6pKZmDIxSVoWggjaKShAIgR2jEYgkIR2jtBBB6dxbyMpsCptumwEVSmGFjJRaMqKIrMPxGT+8tx9BIVaRXf5zHLWbJ2ev/ZdjxW2bUww1qYWoair1lGOcW8Qw8ROtwGLVGAYjLVK5G4VDoPMWHh2zwXk/tqrgsQuIomxXRlPsuh3q3YZ7lydr08WhxNAjm6lMhUOr0qzG7qe4gEfvcJyZYU7OzFO1R0cxc0feN+i39MeHqh0Vx+JQf7TJMjQiikfiv3gX9LSUiagva4vwuL+UlBIQhC0ArbYPRFuK/CGz6uZNfw6eHVJYrDB0yXIsRrck+cyUKQRco6vOCV1ROJyQNBc9Qvb1jhBBhFNz7T5f9NMD1Zr38AJNKdusnvJMa1ASQCCRoQCCQe3hJQChtnFMiWQMWfNqo1VFBLv2WGneRNRXrrh8LVxbWVaNFxQB0BfKQCO82Ud54zcMysaxZgFVeZJO4DLmY/qA/hniXL7lWcZVFKkbYeh0aSjQORpzhHwHUJeEdzKTntRzFOuwv2m5J4xNXY9Z+ExxqpOg1nacQSxh6HWfATJQw1tW1PDqli0izKU/ohaFpO0VpUzIWhaStC0AjCO0IBER2jAkgIArRiO0dpJAgIxHaFoBEi/bK1XCflNuw7pctE2mvCCU2ujVOhBserxm/5G8qKmAqki7Uqgy1aYtrwZb7mE0Dtck8TeRktWqZ0xbVM965A8p6eMWqiKU5t8yo5GbI2t9O3NOpqUyx9ogdYXQk9rbwO6fOfJbbbYLFJXW5AOWoo/FTO8fPwn0Rs/GpXpLVpMGV1DAjtnJkhtZ2Y57lyZqdMKLKAvcLSUJGpTDCzAMOBAImZoShMX3Zeq47ncD4xHCr2/zv8AWAZ4ph+6JwP87/WSFBeB/mb6wDITbfpASAoqNcovxOp8zJwDHWw6tqRqNzC6uO5hqJCtWFGkz1HutJWdmawOVRc3t3TPPNvtb5ThKX3Gk13qWNYjqp7wvjp4SYq3RWTSVnFbW5dYmvSelZKa1WcsUDZyGYki5Pb1TmUQncLyEtYGpY5T17u+dqil0cM5yasdPBfmPgJaSmBoBaTAjtBzOTZG0LSUIII2itJxEQCEREnaIwCMI7RQAEYgBHAC0cLRiCAtGBHCAKIiShAKlTBA+zp2HUSrUoMu8eI1E2sJJdZGjSzreRHLSpgGyPepRY3ZOtT1sv0moq0gQdATbS465rKlFl3i3b1SGk1TNseTm0fS2yNrUcVTFWhUDqeB1B4EdRl6fM2ydrVsLU5yhUameux6JHAjcZ6dyd+1NGAXGpzZ3c6gJpk9o3j1nNLE10dscyffB6XCVcDtGlWUPSqK4IBBUgy1MjUIQiZgN5t36SAOBM022uU2HwtMvUe4WwOUFtTuGk8s5SfaPiMTenhwcOhNs2+qR8F9T2y8YOXRWU1Hs7Xlxy8p4RTSoEVKxFrDVU7W+k8UxWIao7VKjF2clmY7yTMowjsbt1nUk3JlinglG/pd+6dUIKJxZM6kUKdMtuF5doYQDU6n0EtAW0GnYIS5zSm2EcUcgoKEcJIFC0lCQCNpFhJmRMAhCOEAQjijgDgDFCASjvIiOSBwhFeAOEAZ1PIPkt99ql6lxQpEZyNC7dSA/E8O+VlJRVstGLk6RzCoTuBPcCYiLb9O+fQlfBpzYoqoQKoFEgAAMB7NgNPmLzn69MbmphmvlyMATm4a/HhrON6uv6nUtL/p5JsrYQxLHTIq+0y7+4ds37clcMFCkOQCAOnY3OnUJ0eJwfNOVsozHN0Fyqb8B4W8JWxF8pIFyLMB3G858mpnKXDpHTjwRjHnk3ezMGi0KSgexSVVa9nAA06Q1l6nVqp7FUkcKgDjwOnzkKNPKqr+VVXyFpOa2dVGZ8fWItdV7QCx+UrOhb22Z+82HkPnJwk2KNJypwVOrRSk46Bqg2U5dbG27tM5XE8l6YUmiSrAaKbFT2XtedrtynemDe2Woh7wTY/G/hNWqkmw1J0AmM8k4PhmWTHGXaPOGFjY6EGxB33inra7JpIQHpIxcZszU0a7/iF7dx85fwHJ3CshaphaTBzlprzagk9ZuNQPkCZ0x1ifaOCWkfpnisU6Tlzyd+5YmyA81Vu9EnW35kJ4j4ETm51xkpK0c0ouLpjjEjCWKkoRRwAhFeF4ARGEJAImEcIJOkHMe4T9X1jHMe4T9X1m6/wbA/tPo0kNjYL9p9GnRwaUaT/I9wn6vrC9D3Cfq+s3o2Lgv2n+qMbDwP7T/VFIUaIGh7hP1fWO9D3CebfWb0bCwX7T/VJDYOC/af6o4Io0F6HuE/V9Ztti8n/vWtPDUwgNjUcsEvwHWT3S3R5NYWowSnWLsxsAL7us+AuZ6Bg8OlKmtOmMqooVR2fWcupzrGqj2bYsW7lnPYXkDhBY1E5y34RdE+N/WdJs7A06FMUqKCmoLEKosLk3Mygx3nmSySl2zqjCMekOogYWO4/7uO2Uq2CLdPTnFBXMdzrpvtuO7X5S7eDai3wNjKFjncdhRUBRhkZdRfePqO0Tm8Vh2QlGFjYjsPdO8rppaoM6jdUUWde0gfEeU12PwAK6jnE3iourDtIHxHkJVw+i6kajDYwlFJF7qp003jhMwxQ6ww8L/CbPZ2yaT0FANimZMy63seiSP3Ssw19g1B7JDjvyn1nrRxY5pPo4Hqs0G12Uvva9v8j/AEibFjqUnvso9dfSZ12RWJtkt2ki02WC2CBrVOb/AEru8T1yf48F7D12V9JI5jaJqMEFtGc2Cg6kDj1+0JstmbO5sZm1Y/p/vNrtPLzqiwAp0wFsNxcm4A49EeciuH3GqDr7NFfbb97s7N3E9U8/UxXyUvR1YZycLk7bFRwgraEdC4Jbdcg7lPzmypU9bkWsMqKNyr9TYeQipKd7G1tyL7Kj5n07JlJmXRY1nKPZCYujkdQSjq63F9RofME+k4vG8jmpk2wiVgOukxJt+6TfyvPRS0iWm2LPLH0UnjjLs8kfDUASrYdVI3q2dWHeDuhzGG9wvm31npm1Nn0sQuSqoJscrbnXtU75yFXYOFRilSsUZd6m/ge4756ODURycNUzlyYtpouYw3uF8z9ZFqWH9wnm31m+/wAFwf7QfWI7CwZ/8wfWdPBlRzrDD+4Tzb6yBOH9wnm31nRnYGC9+fWRPJ/A/tB9Y4Jo5wtQ9wnm31kS9D3Cfq+s6L/AMB78/qkTsLAe/P6o4FHPZ6HuE/V9YTf/AOB7P9+f1RyOBRy4cyYYzJaSltyKbjGGMmpMlHJ3IjcTUGZArTDmnQcm9jir/m1blL9BOprdZ/0/H455M0YRtl4JzdIv8i8MwNSrlNyBTRyLKBvYjjrYeBnWKXA3h+/oHzFx6SvTawsNABYAaACZQ88bLkeSTkehCO1UZhiSN6MO0WYehv6SLYtfzFex6bhfUD4xB5kV5mWMR2tSX26iL1Xzi39peVwRcG4O4jUSuWuLHUHfea6thnpnNRYgbyg1HluPxkMG6vMTUrHMhyk6kWuhPaOPaPWauhtnqqLb/UlyPFd48LzZUMQri6sGHYb+fCEwY0OVjlAou5uQdaVRvrp2HTcZapYoE5WGRuoHcf3T+L49koVcapqmgyEghbkgFTmvbTwPlJVKRAsLVV93U1YfusfgfMTox55Q49GOTCpG0vMNbFBTlAzMdQo4cWP4R2+V5Tou1iEcgbrVVJdD2E7/ABv3ndJcyAuUEi5uzX6bcbtx7fK03nqlXj2Yx07vkxBf8xmWz1DYM5vzdOwtZR1m3Vv4kaS1SphdfaJ9pm9o/Qdg0lGnjbVeZFPKoJUG9vw5rgW1B11vvEyV9oU03tc8F6R9N3jOKUm3bOtKlSLpaY3qgbzbh293Gaz73Uq/8Mc2v52sW8Bu+MnTwijUs7nrZnNz5W07JVEllsWAddOAPtnuQayLVGbd0BxNi/gNw8fKRQBfZAXuFoM8kETQXeLhveXu/md47N3ZOW5ZUW6FTLqDkZ1BylTqM35SDcfxb50xqTFUYEWOoOhB1BEvjyOElL6KyjuVHna5pMBpd5RbMFEipTuEc2y39luA7DNK9Q2Op3cZ7WPNGcdyPPmnF0y4c0xsWmu2GhK1S1yRktck21MtFJopWKJOzTCztGUkco4SbQMZcwk8g4QkWgEYhCZmY4xCEAG3T0PAC1KmBp/lpu/dEcJxa7qJ1aX2XFk1jhPPOwmJMQhIBMSQhCAazbCi4Nt+8zUYhiFzA2I3MND5xwlH2XXRf2c5aqpYljkp6kkndWm+hCaMoK8IQgHNbSYl2ub2qIBfXTK0eEAzqLde7qhCUl2WN9MbGEJYqRkHhCAYmmMwhANXyhH/AIap3L/UJw9TdCE9LRfizi1XaJbC9ir/AAfEy0YQndEyMTSJhCWJIQhCQQf/2Q==',
          job: 'FrontEnd Dev'
        },        
      ],
      searchText: '',
      current: 'mail',
    }
  }

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <div>
        <div className="menu">
          <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
            <Menu.Item key="mail">
              <MailOutlined />
              Navigation One
            </Menu.Item>
            <SubMenu
              title={
                <span className="submenu-title-wrapper">
                  <SettingOutlined />
                  Navigation Two - Submenu
                </span>
              }
            >
              <Menu.ItemGroup title="Item 1">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title="Item 2">
                <Menu.Item key="setting:3">Option 3</Menu.Item>
                <Menu.Item key="setting:4">Option 4</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <Menu.Item key="alipay">
              <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                Navigation Three - Link
              </a>
            </Menu.Item>
            <Menu.Item key="search" style={{borderBottom:'transparent', float:"right"}}>
              <Search className="search-box"
              placeholder="Find Profile..."
              onSearch={value => console.log(value)}
              style={{ width: 200 }}
              />
            </Menu.Item>
          </Menu>
        </div>
        <div className="card">
          <Row gutter={[16,16]}>
          {
            this.state.users
            .filter(user => (
              user.name.toLowerCase().includes(this.state.searchText.toLowerCase())                     
            ))
            .map((user, index) => (
              <Col key={index} className="gutter-row" span={5}>
                <User name={user.name} email={user.email} pic={user.pic} job={user.job} />
              </Col>
            ))
          }          
          </Row>
        </div>
      </div>
    );
  }
}

export default App;