export async function RegisterNewVisitant(fullName, phone, otherChurch, companion) {
    try {
        console.log(fullName, phone, otherChurch, companion);
        return true

    } catch (error) {
        console.log("Error RegisterNewVisitant: ", error);
        throw error
    }
}

export async function GetIntegrators() {
    try {
        let data = [
            {
                "id": "5f0b0e88ce2dc597a02eab54",
                "isActive": true,
                "profile": "https://picsum.photos/500",
                "name": "Marina George Yates",
                "mentor": "Miller Ortiz Hardy",
                "quantityFeedbacks": 1,
                "accompanyLifes": 8,
                "numberNet": 1
            },
            {
                "id": "5f0b0e885ffa490488a0f84a",
                "isActive": false,
                "profile": "https://picsum.photos/500",
                "name": "Francisca Moore Terry",
                "mentor": "Letha Wynn Black",
                "quantityFeedbacks": 15,
                "accompanyLifes": 3,
                "numberNet": 3
            },
            {
                "id": "5f0b0e882945bc8a9987708c",
                "isActive": true,
                "profile": "https://picsum.photos/500",
                "name": "Barber Soto Guy",
                "mentor": "Fitzgerald Rodgers Marquez",
                "quantityFeedbacks": 18,
                "accompanyLifes": 1,
                "numberNet": 1
            },
            {
                "id": "5f0b0e88a23e8200a3164b55",
                "isActive": false,
                "profile": "https://picsum.photos/500",
                "name": "Ina Cameron Duran",
                "mentor": "Kitty Hampton Carver",
                "quantityFeedbacks": 20,
                "accompanyLifes": 5,
                "numberNet": 2
            },
            {
                "id": "5f0b0e8822ed8505f2189099",
                "isActive": false,
                "profile": "https://picsum.photos/500",
                "name": "Clemons Fletcher Mayer",
                "mentor": "Connie Flynn Clemons",
                "quantityFeedbacks": 2,
                "accompanyLifes": 5,
                "numberNet": 4
            },
            {
                "id": "5f0b0e883299c189d3b862b4",
                "isActive": true,
                "profile": "https://picsum.photos/500",
                "name": "Orr Sanford Sloan",
                "mentor": "Gwendolyn Dudley Hayden",
                "quantityFeedbacks": 16,
                "accompanyLifes": 2,
                "numberNet": 3
            }
        ]

        return data

    } catch (error) {
        console.log("Error GetIntegrators: ", error);
        throw error
    }
}

export async function AddIntegrator(email) {
    try {
        console.log(email);
        return true

    } catch (error) {
        console.log("Error AddIntegrator: ", error);
        throw error
    }
}

export async function GetLifes() {
    try {
        let data = [
            {
                "id": "5f0c9c2dbac81ab64a727b82",
                "name": "Odom Hendrix Peterson",
                "legend": 0,
                "phone": "+55 (850) 530-2375"
            },
            {
                "id": "5f0c9c2d266907d2abdffc5f",
                "name": "Tami Franklin Glass",
                "legend": 1,
                "phone": "+55 (844) 425-2245"
            },
            {
                "id": "5f0c9c2d0e1674be757c8a27",
                "name": "Cummings Park Rivera",
                "legend": 1,
                "phone": "+55 (958) 476-2635"
            },
            {
                "id": "5f0c9c2d062174507f4604b4",
                "name": "Powers Valdez Christensen",
                "legend": 0,
                "phone": "+55 (849) 496-3821"
            },
            {
                "id": "5f0c9c2d321a76b0ce3040c7",
                "name": "Georgia Gibson Fowler",
                "legend": 3,
                "phone": "+55 (988) 551-3907"
            },
            {
                "id": "5f0c9c2dc4614bd76af7848c",
                "name": "Richmond Black Mcmillan",
                "legend": 0,
                "phone": "+55 (856) 493-3821"
            },
            {
                "id": "5f0c9c2d85241337f725e522",
                "name": "Bernice Cotton Hudson",
                "legend": 2,
                "phone": "+55 (854) 513-2705"
            },
            {
                "id": "5f0c9c2db40b1e338d747859",
                "name": "Robyn Fleming Simpson",
                "legend": 2,
                "phone": "+55 (957) 486-3336"
            },
            {
                "id": "5f0c9c2d8886f1b4c7b0f73b",
                "name": "Tamera Callahan Osborn",
                "legend": 0,
                "phone": "+55 (846) 422-3346"
            },
            {
                "id": "5f0c9c2dd583fad9b0cd803d",
                "name": "Delacruz Poole Walls",
                "legend": 3,
                "phone": "+55 (830) 597-2709"
            }
        ]

        return data

    } catch (error) {
        console.log("Error GetLifes: ", error);
        throw error
    }
}

export async function SendNewFeedback(id, text) {
    try {
        console.log(id, text);
        return true

    } catch (error) {
        console.log("Error SendNewFeedback: ", error);
        throw error
    }
}

export async function LifeLost(id) {
    try {
        console.log(id);
        return true

    } catch (error) {
        console.log("Error LifeLost: ", error);
        throw error
    }
}

export async function GetDetailsLife(id) {
    try {
        let data = {
            "id": "5f0da90f3194d0d7846cb40c",
            "name": "Mallory Wilkerson Valdez",
            "currentStep": 6,
            "phone": "+55 (812) 461-3563",
            "email": "malloryvaldez@prowaste.com",
            "birthday": "2003-12-13",
            "integrator": "Hardin Watson Leach",
            "feedbacks": [
                {
                    "description": "Nisi nisi minim proident reprehenderit reprehenderit aliquip reprehenderit dolore enim do pariatur nostrud nisi. Laboris id id est aliqua. Consequat irure aute elit deserunt Lorem amet. Nulla ut ullamco aliquip quis ad excepteur. Sit fugiat tempor eiusmod pariatur. Aliqua et reprehenderit voluptate officia laboris eu occaecat in culpa dolor.\r\n",
                    "integrator": "Whitfield Vance Torres"
                },
                {
                    "description": "Ullamco cupidatat eu anim veniam esse in consequat id enim nisi ea. Laboris ea sunt Lorem sit et nostrud cupidatat in ipsum mollit sint. Adipisicing ipsum laboris fugiat tempor eiusmod reprehenderit adipisicing nulla nisi qui. Ipsum ea et cillum fugiat ut tempor nostrud cupidatat pariatur ullamco duis veniam. Cupidatat eiusmod ex non irure cillum reprehenderit ex velit amet Lorem exercitation dolor.\r\n",
                    "integrator": "Mcpherson Riddle Richardson"
                },
                {
                    "description": "Ad ut aliqua duis enim dolore ullamco qui deserunt elit est aliqua nostrud nulla. Enim sunt nostrud nostrud incididunt laboris sunt. Excepteur do adipisicing esse proident. Ea Lorem magna sint ex fugiat esse ex incididunt magna aliquip sint. Reprehenderit ea labore ea incididunt fugiat adipisicing laborum magna nisi mollit. Anim exercitation nisi ex magna aliqua ea nulla occaecat commodo laboris exercitation voluptate. Dolore cillum aute ea sunt dolor est laborum non exercitation magna ex sint.\r\n",
                    "integrator": "Robbins White Benson"
                },
                {
                    "description": "Laboris eu incididunt mollit sint laborum labore dolore consequat exercitation ex officia do aliqua quis. Mollit nulla amet nulla ullamco aliqua esse commodo eiusmod enim esse non occaecat. Tempor occaecat cupidatat amet sit minim minim adipisicing. Eu enim et sint voluptate laboris nisi quis voluptate nulla laboris. Exercitation adipisicing laborum incididunt ipsum excepteur magna exercitation id aliquip esse ipsum. Tempor et in deserunt qui incididunt amet nisi sit dolor velit adipisicing non irure qui.\r\n",
                    "integrator": "Florence Mendez Travis"
                },
                {
                    "description": "Velit exercitation veniam reprehenderit voluptate eiusmod reprehenderit nisi nisi nostrud non in voluptate cupidatat dolore. Culpa et ipsum ad mollit mollit nulla commodo ut sit occaecat do. Reprehenderit fugiat excepteur sint sunt Lorem magna pariatur ullamco ullamco aliqua sint. In aliquip ex veniam laboris aliqua ut quis laboris ex non aliqua reprehenderit elit. Sit consectetur laborum proident amet consequat sint laboris laboris eu enim pariatur elit mollit.\r\n",
                    "integrator": "Candice Bush Stephenson"
                },
                {
                    "description": "Adipisicing labore duis sunt minim elit ullamco veniam laboris amet duis mollit magna. Ex do officia magna dolore eu duis fugiat culpa aute nulla. Pariatur Lorem culpa excepteur labore anim. Incididunt qui aliquip deserunt Lorem mollit duis enim voluptate excepteur consectetur nostrud officia quis tempor. Duis sit ipsum tempor enim laborum et.\r\n",
                    "integrator": "Wagner Bray Allison"
                },
                {
                    "description": "Anim nostrud qui nostrud enim adipisicing labore nostrud ipsum Lorem duis ullamco eiusmod. Proident excepteur sit reprehenderit elit sint pariatur consequat reprehenderit sunt excepteur. Nisi velit velit sunt proident incididunt ut proident dolor reprehenderit eu in. Aliqua ipsum mollit quis commodo sint pariatur magna adipisicing.\r\n",
                    "integrator": "Navarro Cash Mcclure"
                },
                {
                    "description": "Adipisicing in excepteur mollit exercitation aliquip. Aliquip mollit culpa amet labore deserunt cillum excepteur et ad culpa aute. Minim minim magna esse nostrud nostrud deserunt occaecat eu voluptate magna elit. Ea aliquip irure tempor eu tempor occaecat proident Lorem sit proident. Incididunt eiusmod consectetur culpa ex non in proident aute sunt elit ad duis ullamco. Duis labore nulla officia tempor veniam cillum mollit veniam irure labore ex adipisicing dolore.\r\n",
                    "integrator": "Alfreda Serrano Mckee"
                },
                {
                    "description": "In nostrud excepteur veniam sunt. Occaecat exercitation mollit ea ea dolor ad. Id dolore exercitation aute ea voluptate qui.\r\n",
                    "integrator": "Brenda Skinner Bryant"
                },
                {
                    "description": "Pariatur sit est in exercitation in magna sint qui elit consectetur sint id. Eiusmod nulla sint qui laboris consectetur amet nisi do eiusmod. Sint deserunt Lorem duis sunt magna id proident mollit.\r\n",
                    "integrator": "Decker Shepard Gonzales"
                }
            ],
            "historicPropheticWay": [
                {
                    "date": "2019-04-17",
                    "step": 0
                },
                {
                    "date": "2019-03-24",
                    "step": 1
                },
                {
                    "date": "2019-07-23",
                    "step": 3
                },
                {
                    "date": "2019-10-03",
                    "step": 4
                },
                {
                    "date": "2020-02-05",
                    "step": 5
                },
                {
                    "date": "2020-06-27",
                    "step": 6
                },
                {
                    "date": null,
                    "step": 7
                }
            ]
        }

        return data

    } catch (error) {
        console.log("Error GetDetailsLife: ", error);
        throw error
    }
}

export default { RegisterNewVisitant, GetIntegrators, AddIntegrator, GetLifes, SendNewFeedback, LifeLost, GetDetailsLife }