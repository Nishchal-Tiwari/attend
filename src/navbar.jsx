import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Image from "./img1.png";
export default function navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIVEhISEhUYGBgZGBoVGRoYGBgYGhkZGBgaGhgYGBgcIS4lHB4rIxkYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHzQnJSQ0NDQ0MTQ0NDE0NDE0NDQ0NDQxNDQ0MTQ0NDQ0NDQ/NDQ0NDQ/NDQxND8/ND8xMTExMf/AABEIALQBFwMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAAAQYFBwIDBAj/xABDEAACAQIEAwUDCAcGBwAAAAABAgADEQQFEiEGMUEHIlFhcRMygRRCcpGxssHRIzQ1UmKCoRckM1NzkhUWdJOi4fD/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIEAwX/xAAkEQEAAgICAgEFAQEAAAAAAAAAAQIDERIhBDFBIjJCUWFxE//aAAwDAQACEQMRAD8A3NERAREQEREBERAREQEREBERAREQEREBERAREQERIJgJE8GY5pSoi7tv0A5n4Sr4riisxIpgKOl9zON89ae1LXrX2u5MKbzW9XMK7+/UY+QNh/SWvhMn2FySe83OVx54vbUIrki06hn4kCTNDoREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEROJNoEEyt57xEKd6dKxfkT0X8zPPxDn/OlSO/JmH2CVZFJP2zFn8jX01cMmXXUObu7sWYknqTOVrbCSfASJ59rTM9ssztMvHDC2wyeZJ/rKNL/AMPrbDUvo/aZr8P7pdvH9spEgSZ6TWREQEREBERAREqHaNxM2BwbVKZHtWYJTuL7nmbdbC8C3xNJ8DdpuLr42nQxbIadS6gqmkhua73m6wYEyLzw5xXZKFV1NiqMQfAgbGal7M+NsfiseKOJq600M1tKjcEW5QN0Xi8p/aZnNbC4B62HfQ4ZQDYHYsAdjMT2R8SYrG08Q2KfWVcKuwFhpB6esDY8REBERAREi8CYiICInBzYE+UDleTNCUOMMwOcjDnEv7L5SV0d22m/u8rzfCtcXgSTKrxLnem9Gme985h08vWeziTOBRTQp77cvIeJlFJJJJ3J5+ZmPyc3H6YcMuTXUJVbmwnfawsPj5yETSPPr+Um08ze2VESZEAZsPJR/d6X0F+ya8mw8lP93pfQX7Jt8P7pd8HuXvEmQJM9JqIiICJEmAiIgQZ8+9secnEY9cLTN1pWWw61Htf48h8Zu/iDM1w2FrYhuSIzepA2H1z5x4Uq062Yivi6ioupqzFzYFidgL+v9IHDiPI3wFTDOpNyqtfwqIQWA8rz6L4WzZcVg6GIX5yi/k1rEfXNZ9pmMy7E4T9DiKTOlmUBhckbED1BnLsLzzatgmPL9InodmH17/GBYu1PiWvhKVOnRRXFUMrXDGw08xaaT4VzyrgsR7eigd9JWxBIsSCTZfSfSHFGCV6FRze6o33TNF9k1EPmJRuRpv8AaIGT7ROMcVWophqlNQj06VVmAYEM3eK+HMTF9nXFWIwjijRpq61aqBmIYlQbKbW25b7zYfatlSUstqMpJuyDf6QmF7E8CtSliNXzagP/AIrA2VxRxPh8Dh/b1judkQe87eA/Oanr9qea4h2+SUFCg8lptUI9TyvMT2uZi1TMmpEnRRVUA8LjUxHnuJ7cs4/wVCmtNMI+lQBYOo9SbcyYGVybtdxNOoKeY0AB1ZVZHXzKtzE3FgMbTrU0q02DI41KR1E+dOK+LcLjKRRcO6OCCjFlOnfceNiJfOwzM3bDYjDsbhG1J5BhuPrgeXiHtSxOGx9TDezpmmjhSxDFtJsSefPczw512t4x2Y4GiFpr89kZyfM22WVDjejrzivT/eqov+4KPxm88p4VpJh0Re6AtgBsOXM+N4FP4H7VXr1kw2MVVLnSjrcDV0DDpNr1qyorO5AVQWJPIAczPmXP8IuHzgog0gV6bADa2oqTb65t3tazJ6eVkISDUKoSOdjz+yBWOJu2B9bU8Ai6Qbe0cE6j4hR0njyvtYx1NgMbRDI2xYIyMAeovs0nsh4ap11qYlwCwfSpIvpAAuR5m82ZmvCtKpSZCNQIN1bcH8jA0TlWKWrnVOqm6vidS9NiTbafR2Y49KFE1HIAC338hPm7KMGKGcU6N9kxGm/8Ivb+kvfajn7PhnWmSELLTHmDcsfjptK2tEaj9omfhX8+4/Z6rmggck21Pcg+ARAeU6sv40qIyjF0NKn5yqyEeek+98JPA+Ug0hV5M7MNXVUU2sp6Em+8s2Ly1WQq13U7FW3FvK/I+czXvji3C0ONrVi3GYYXKuMWr4paApoEZmAa7aioBINifITNZ7mZw+HasqhiNNg1wNzbpKBw9hvZ5mlO99DuvwCtaW/jb9SqfyfeEpkx0jJWIhFqxyjTG0ePVNIlqN6urSqLq0kW5knfn0E8X/PGKR/0tBAv7pV0a3kSZy4By9WSpVt3tWgH90BbtbwJuJk+MsAvyR2PeKFWUnci7AEA+BBl5/5Rfhpb6Ytx0sOWZgleklWnfS19jzVhsVMs2O4ww2AwVJqpLOVIRF95iL/UPOa17O2PyWoD/mn7gmDz7Vis09gTYB1oDyAPet6nVIw045ZiPSKV1edLDi+1vMqrH5PTRF8AjObeZnryXtixKOExtFWX5zICjr56Tzmxck4Ro06SIo0ADYLsfUnqZ05rwPQrOjOivpNwXFyPzHkZsd1lynMqWIpJXotqRxcH8D5yncddotLAt7Gmoq1rXK3sqfSP4S0pRGGwz6fmISABYbAnYfCfMuFzamcY2KxaNVBdnK3G7E929+g8IFz/ALS88b9IlEaOe1FiLfS/GW/grtTTE1Fw+LQUqjGysD3GbwN/dMqydpmEAt8lqeutRKVxRm9DEVlrYem1Jrd65G7A3Vhp6+cD6rBiYLgvMGxGAwtZveamt/W1j9kQKB25Z5opUsEh3c+0f6K8h8T9kpGS9n1XEUEra9OsagugtYdLm/WbG4p4DXGYp69X2hJsoswChR0AtL7lGAWlSRAoFgBbwAFrQNFf2W1P84/9s/nMJlzVMrzSnrN/ZuAxtYMjWubeG/8ASfTxQeAmu+MeAqeLrioyvcC3cIFxe++0C4Z1VDYOq67hqbEehW80T2N/tQf6b/eWbswOWOmBGGYsdKaAWI1EWtufGVbhDgNMHihXQPexXvMCLG3l5QPT2zfsyp9JPviYDsE/wsV9MfcEvnGmSDGYY0GDaSQTpNjsbjeY/gPhZcCKioHs51HWQd7W2sPKBrDtbyp6WOGLVbo+m5tcB1OwPkRaWXh7OMpxFNWqVKVF7d5HVFsetiRYibFz/JKeJRldVa4sQwuCJq3MeymmXJQ1EHgLOPhfeB6M04iyai6oGWrc95qdNGVfMm2/wl/4XwuH9mMRhyClRbghNFx6WEoeSdllJHVnV3sb98gKP5QN5tTAYQUqYQdBbb8IHzlxT+3X/wCop/as+kqH+Gv0R9k1rmfZ8lXGtimD6jUV9mAW6kEbW8hNl0VsijytA+b+OP243+rS+1ZtntJyhsRlpRBdlAdfVd7fGY3Ouz9K+NbFMH1F1fZgF7trbW8psX5MGphG8LQNDdlnGlPAvUw+KutN2uGse4/IhhztNl512k5bSpM9OstVyO6ibknpfwmD4n7NqVZ2qBWVjuWp2F/pKRYnzmFwvZzQw4atV1uF3AeyrfoLD3pEzERuUTOlCybFtWzJKz+89VnPlfUbS5cS4Jq2GdF3YWZR4ldyPUi86KeUUVxPyhabhtZYAONIJ8Bp5byxUqGpbnpy9fGYc2evKJj4Z75Ii0TCl8FcRU6KHD120jUWViDYE81bw3Es2Y8TYSlTLe1R2t3VQ6iT0vbkPOYzNuGaVRizIysebIQL+bKRYnz2nTl3ClFGD6Gdgbj2ltII/hXn8TJmcFp5zPaZmkzylXOGK5fMqdRubM7H1KtLnxt+pVP5PvCdeDyGkmI9uqOG1M3vjSNV+mnlvMpnGDWtSNN1Yq1r6TpOxvzsZW+as3rMeoRa9ZtDBdnP6s/+q33FmR40/Uq/ov31noyHLkoIURWALFjqbUbkAeA8J78Xk7YpGohGZWtqKnTaxBG9j4SnKLZ+UK73k3Cq9nSk4aoALk1Tbr8wTFcWYOthMcmK0FdTrUW/7y+8p9bX+M3JwJwomCWoArd5tV2IYg2tsbTKcR8OUsShV0Vr8weXr5Hzm+tNWm37aYrq22GyHtLy2tSRqlZaL2GpH7tiBvY8iJ5M37WcvpVESmWrAnvsg7qr4gn3j5CVbG9lFPUdDVEHh3WH1kXnuyTstpI6s4ZyN/0ltI/lA3nRZsn5VTxWENSk2pKiXBsRcEeBnzvhD/w7MXXEJqp3ZT3Q3cY7Ot+ZH5z6Ty/BinTFMcgLSscV8GUcUO8gbqLGzL9FukDBUMXkr09YxNAC17MqBvTSRe8xmX8Q5RVxHyddrtpRzSGlz5WW4+qY+p2Trq2arbwsp/raWzhTs9pYdw4U6h89zqb4dF+EC85ZhFpU1ReXSwsPqET1qLACIHK0mIgIiICRJiAiJBgDIhjMNm+fU6AtfU3RR+PhKWvWsblW1or3LK1qqqCzEADmTKrm/FXNcP8A7zy+A6yv5jmlXEN3idPRRyH5zop0gOe/2Tz83lzPVWa+f4qyVPP8Wfni3jpEsPD2cNUZkqEauam1rjqJUZ2YauUqI681N/h1E44vItFtzKlMtuXbZoidGErq6K6m4IBnfPYidxtuQ0oHGOaa6goqe6vvebf+pa8/zIUKLPfve6o8WPKauaoSSSbk7k+JmPysmo4w4Zr6jTsRdRAHWZAWAsOQ2nnwiWGrqdh6dZ3zzJljmSBF5F5G0JiRee3K8ves4VeXzj4D85alZvOoWrWbdQ5ZVlr13sNlHvN+A85esHg0poFQW/HzM5YPCLTRUQWAnpnr4cMUj+t2PHFYAJMRNDoi0WkxAREQItJiICIiAiIgIiICIkEwIM6MVikpqWdgoHUzEZ1xFTo3Re8/gOQ9T+EpWLxtWu13YnwHRfQTLm8mtOo9uV8sVZvOOKHe6ULqv73U+nhK+qMxux59TzM5pSA57mdk8vJltedyx2vNvYoA2ERE5qERECz8I473qLHl3l9OolqJmssNXNOotReam/qOolwznOVp4Q1lIuy2T1b8t/qnqeLm3TU/Dbhybr38Kjxlmnta/s1Pcp931bqfwmBw6amAH/wnlapckk8zc+vWZTLEspY9dh+My5rTM7lnvbc7l7dunIbCDIMXmVyIkTkiFiFUXJNgJMRM9QmO5d2Cwr1XCKNzz8h4y/5bgEpIEUep8T4zzZFlYopvuzbsfwEywnreNgikbn224sfGO02kxE1uxERAREQEREBERAREQEREBERASDJiBX824bpVizC6OfnLyPqvIyqZhllfD++mtP30F/8AcOYmypxZAeYmfJ49b9/LnbHFmrKdVWF1N5zloznhFHvUoH2b89vdb1HSVCs1Sk/s8QpRuh6HzBnm5fHtT/GS+Kau+RIDX5RM7kkmCZxMSBMx+e4l9FNCe4pJA8CfGe+dOLoh6bL5bevSdKW4yms6lgMMCzADqbSxooACjkBaYjJMK4LO4tbuj16mZcCMltz0m07lykRBnNUvLbwtlVgKzjc+6D0HjMRw/lhrVNTDuLufM9BL6qgCwno+Jg/KWnBj/KXMCTIkz0msiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgQZ4MzyylXQpVUMOniD4g9DMhIlZrExqUTG2rc4yatg2LC9Slfn1XyYdPWdFHEK4up+E2pVpqwKsAQdiDuCJr/iXhZqRavhQSvNkG+nzXxHlMGfxfyqzZcPzDHgyLzy4XGBxY7N4T0zz5jXtlmJhMSLxeQgEXgyLyBM7sLhmqOqINybeniZ0Ey68LZXoT2rjvsNvJek0ePim9v464q8rMvl2DWkiovTn5nqZ7IAkz2a1isahviNEREskiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICcSJMSBQ+LOE76sRhRZuboOvmvnKrgsbfuvsw23m5SJRuMuFderEYcWcbuo+cPEfxTHn8eLdwz5cW+4YGRMdgMdfuPseW/4+cyE8y1ZrOpY5jSYkXnKhTZ3VFFyxsJFY3OiI2y/DmW+2qamHcWxPmegl/AtPFleCWjTVF6cz4nqZ7rz2cGOKV/r0MVeNdJiAYmh0TERAREQEREBERAREQEREBERAREQEREBERATjeTODCVmRJacGrASGS86moyvKVZlyOJE62xgnW+GM6HwjdJWbSruXoOYCcDmInhqYGp0nkq5bWPKRzlEzKvcYZEHLYnDizc3QfO/iXzldy3MQ/cY7iXLEZDi25MR8bTAYjgLFFi6WDXvz6zLkxxb4crU5fCLyycMYYLes3M7LfoOpmKwHDGO2WoijxYONx6S2YPI3UAM3ltOeHBaLbmFaYrRO5hkUxN53o5M6qWBCz0pSAm6OTTES5KZ2CcQs5TpWJXgkxEuEREBERAREQEREBERAREQEREBERAREQEiIkSEGIgRERKyktIiJEoTAkRJgSJMRLQJiIkhERAREQEREBERAREQEREBERAREQP/Z"
              alt=""
              width="30"
              height="24"
            />
          </a>
          <Link class="navbar-brand" to="/">
            Attendance System
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                  to="/manage_attendance"
                >
                  Take attendance
                </Link>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Stats
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to="/graph" class="dropdown-item" href="#">
                      Average attendance
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/modify_attendance"
                      class="dropdown-item"
                      href="#"
                    >
                      Modify Attendance
                    </Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <p class="dropdown-item" href="#">
                      by Xceptions
                    </p>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">by Xceptions</a>
              </li>
              <li>
                <img src={Image} id="sarv_siksha" />
              </li>
            </ul>
            <Link to="/login_">
              <button class="btn btn-outline-success" type="submit">
                Login
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
