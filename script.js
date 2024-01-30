const image1 = 'doctrine1.png'
const image2 = 'doctrine2.png'
const image3 = 'doctrine3.png'
const title1 = 'December 2nd, 1823'
const link1 = 'https://www.archives.gov/milestone-documents/monroe-doctrine'
const text1 = 'The Monroe Doctrine was created in 1823 as a cornerstone of United States foreign policy by then-President James Monroe. In his annual message to Congress, Monroe articulated the doctrine, outlining the principle that the Americas were to be considered off-limits for further colonization by European powers. The core tenets of the Monroe Doctrine emphasized the U.S. commitment to preventing European interference and expansion in the Western Hemisphere. This policy was, in part, a response to concerns about potential European attempts to regain control over newly independent Latin American nations. The Monroe Doctrine served as a pivotal declaration of the United States intentions to assert its influence in the Americas and became a fundamental aspect of American diplomatic history.'


const image4 = 'Britney Spears.jpg'
const image5 = 'Britney Spears.jpg'
const image6 = 'Britney Spears.jpg'
const title2 = 'December 2nd, 1981'
const link2 = 'https://en.wikipedia.org/wiki/Britney_Spears'
const text2 = ' Born on December 2, 1981, in McComb, Mississippi, Britney Spears has not only left an indelible mark on the music industry but has also become a symbol of resilience and strength. As the "Princess of Pop," she gained worldwide fame with hits like "…Baby One More Time" and "Toxic," becoming a cultural phenomenon in the late 1990s and early 2000s. Over the years, Britney has faced both triumphs and challenges, captivating the public with her talent while navigating the complexities of fame. In recent times, her legal battles and the #FreeBritney movement have brought attention to the broader issues of conservatorship and personal autonomy. As fans and well-wishers celebrate Britneys birthday, its an opportunity to reflect on her enduring impact on the music industry and her resilience in the face of adversity.'

const image7 = 'BritneySpears1.png'
const image8 = 'Britney Spears.jpg'
const image9 = 'Britney Spears.jpg'
const title3 = 'December 2nd, 1981'
const link3 = 'https://en.wikipedia.org/wiki/Britney_Spears'
const text3 = ' Born on December 2, 1981, in McComb, Mississippi, Britney Spears has not only left an indelible mark on the music industry but has also become a symbol of resilience and strength. As the "Princess of Pop," she gained worldwide fame with hits like "…Baby One More Time" and "Toxic," becoming a cultural phenomenon in the late 1990s and early 2000s. Over the years, Britney has faced both triumphs and challenges, captivating the public with her talent while navigating the complexities of fame. In recent times, her legal battles and the #FreeBritney movement have brought attention to the broader issues of conservatorship and personal autonomy. As fans and well-wishers celebrate Britneys birthday, its an opportunity to reflect on her enduring impact on the music industry and her resilience in the face of adversity.'

const image10 = 'Spears1.png'
const image11 = 'spears2.png'
const image12 = 'spears3.png'
const title4 = 'December 2nd, 1981'
const link4 = 'https://en.wikipedia.org/wiki/Britney_Spears'
const text4 = ' Born on December 2, 1981, in McComb, Mississippi, Britney Spears has not only left an indelible mark on the music industry but has also become a symbol of resilience and strength. As the "Princess of Pop," she gained worldwide fame with hits like "…Baby One More Time" and "Toxic," becoming a cultural phenomenon in the late 1990s and early 2000s. Over the years, Britney has faced both triumphs and challenges, captivating the public with her talent while navigating the complexities of fame. In recent times, her legal battles and the #FreeBritney movement have brought attention to the broader issues of conservatorship and personal autonomy. As fans and well-wishers celebrate Britneys birthday, its an opportunity to reflect on her enduring impact on the music industry and her resilience in the face of adversity.'



const image13 = 'Britney Spears.jpg'
const image14 = 'Britney Spears.jpg'
const image15 = 'Britney Spears.jpg'
const title5 = 'December 2nd, 1981'
const link5 = 'https://en.wikipedia.org/wiki/Britney_Spears'
const text5 = ' Born on December 2, 1981, in McComb, Mississippi, Britney Spears has not only left an indelible mark on the music industry but has also become a symbol of resilience and strength. As the "Princess of Pop," she gained worldwide fame with hits like "…Baby One More Time" and "Toxic," becoming a cultural phenomenon in the late 1990s and early 2000s. Over the years, Britney has faced both triumphs and challenges, captivating the public with her talent while navigating the complexities of fame. In recent times, her legal battles and the #FreeBritney movement have brought attention to the broader issues of conservatorship and personal autonomy. As fans and well-wishers celebrate Britneys birthday, its an opportunity to reflect on her enduring impact on the music industry and her resilience in the face of adversity.'

function button(image , image2, image3, title, text, link){
    document.getElementById('image').src = image
    document.getElementById('image-2').src = image2
    document.getElementById('image-3').src = image3
    document.getElementById('link').href = link
    document.getElementById('Birthday').textContent = title
    document.getElementById('info').textContent = text
}