const image1 = 'doctrine1.png'
const image2 = 'doctrine2.png'
const image3 = 'doctrine3.png'
const title1 = 'December 2nd, 1823'
const link1 = 'https://www.archives.gov/milestone-documents/monroe-doctrine'
const text1 = 'The Monroe Doctrine was created in 1823 as a cornerstone of United States foreign policy by then-President James Monroe. In his annual message to Congress, Monroe articulated the doctrine, outlining the principle that the Americas were to be considered off-limits for further colonization by European powers. The core tenets of the Monroe Doctrine emphasized the U.S. commitment to preventing European interference and expansion in the Western Hemisphere. This policy was, in part, a response to concerns about potential European attempts to regain control over newly independent Latin American nations. The Monroe Doctrine served as a pivotal declaration of the United States intentions to assert its influence in the Americas and became a fundamental aspect of American diplomatic history.'


const image4 = 'hanging1.png'
const image5 = 'hanging2.png'
const image6 = 'hanging3.png'
const title2 = 'December 2nd, 1859'
const link2 = 'https://www.pbs.org/wgbh/americanexperience/features/brown-hanging/'
const text2 = ' John Brown, a fervent abolitionist known for his radical stance against slavery, was hanged on December 2, 1859. His execution took place in Charles Town, Virginia (now West Virginia). Brown had led a raid on the federal arsenal at Harpers Ferry in October 1859, aiming to arm slaves and spark a widespread uprising against slavery. The raid ultimately failed, and Brown was captured by U.S. Marines under the command of then-Lieutenant Colonel Robert E. Lee. Browns trial and subsequent hanging drew significant attention and further deepened the sectional tensions between the Northern and Southern states in the prelude to the American Civil War. While Browns methods were controversial and his raid unsuccessful, he became a symbol for many abolitionists and Northern sympathizers who admired his unwavering dedication to the abolitionist cause.'


const image7 = 'Spears1.png'
const image8 = 'spears2.png'
const image9 = 'spears3.png'
const title3 = 'December 2nd, 1981'
const link3 = 'https://en.wikipedia.org/wiki/Britney_Spears'
const text3 = ' Born on December 2, 1981, in McComb, Mississippi, Britney Spears has not only left an indelible mark on the music industry but has also become a symbol of resilience and strength. As the "Princess of Pop," she gained worldwide fame with hits like "…Baby One More Time" and "Toxic," becoming a cultural phenomenon in the late 1990s and early 2000s. Over the years, Britney has faced both triumphs and challenges, captivating the public with her talent while navigating the complexities of fame. In recent times, her legal battles and the #FreeBritney movement have brought attention to the broader issues of conservatorship and personal autonomy. As fans and well-wishers celebrate Britneys birthday, its an opportunity to reflect on her enduring impact on the music industry and her resilience in the face of adversity.'

const image10 = 'medical1.png'
const image11 = 'medical2.png'
const image12 = 'medical3.png'
const title4 = 'December 2nd, 1982'
const link4 = 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5358116/#:~:text=In%201982%2C%20the%20first%20permanent,at%20the%20University%20of%20Utah.'
const text4 = 'The first successful permanent artificial heart implantation occurred on December 2, 1982, when Dr. William DeVries implanted the Jarvik-7 artificial heart into Barney Clark at the University of Utah Medical Center in Salt Lake City. This groundbreaking procedure marked a significant milestone in the development of artificial heart technology. The Jarvik-7 was designed to serve as a bridge to transplant for patients awaiting a donor heart. Barney Clark, the recipient, lived for 112 days with the artificial heart, ultimately succumbing to multiple organ failure. While the Jarvik-7 had limitations and was eventually replaced by more advanced devices, this pioneering surgery laid the foundation for subsequent advancements in the field of artificial heart technology and transplantation.'




const image13 = 'Enron1.png'
const image14 = 'Enron2.png'
const image15 = 'Enron3.png'
const title5 = 'December 2nd, 2001'
const link5 = 'https://www.investopedia.com/updates/enron-scandal-summary/'
const text5 = 'Enron, once a leading energy company and symbol of corporate success, filed for bankruptcy on December 2, 2001. The collapse of Enron was a result of widespread financial fraud and accounting scandals that involved the manipulation of financial statements to conceal the companys massive debts and losses. In the years leading up to its bankruptcy, Enron engaged in questionable accounting practices, hiding debt in off-balance-sheet partnerships and inflating profits. As the truth about the companys financial troubles emerged, confidence in Enron evaporated, causing its stock price to plummet. The bankruptcy filing was one of the largest in U.S. history at the time, leading to significant financial losses for investors and employees. The Enron scandal also prompted regulatory reforms and increased scrutiny of corporate governance and accounting practices, shaping the landscape of corporate accountability and ethics in the years that followed.'

const image16 = "pexels-cup-of-couple-8014714.jpg"
const image17 = 'pexels-cup-of-couple-8015242.jpg'
const image18 = 'pexels-towfiqu-barbhuiya-11264390.jpg'
const title6 = 'December 2nd'
const link6 =   'https://www.timeanddate.com/on-this-day/december/2'
const text6 =    'December 2nd, a day that holds special significance as it marks both the celebration of my birthday and a chronicle of historical events.This date has witnessed a tapestry of joyous and somber occurrences. From the birth of iconic pop sensation Britanny Spears to the sobering moment in 1859 when abolitionist John Brown was hanged after his courageous raid on Harpers Ferry, Virginia. The business world felt seismic shifts as Enron filed for bankruptcy protection on this day, forever altering the financial landscape. Stepping into the realm of geopolitics, December 2nd bears the imprint of historical significance with the outlining of the Monroe Doctrine, a pivotal policy in U.S. foreign affairs. Meanwhile, in the medical arena, a groundbreaking achievement unfolded as the first artificial permanent heart transplantation took place, showcasing strides in the field of healthcare. These diverse events on December 2nd intertwine personal celebrations with the broader narrative of humanitys triumphs and tribulations. '


function header(image,image2,image3,title,text,link){
    document.getElementById('image').src =image
    document.getElementById('image-2').src =image2
    document.getElementById('image-3').src =image3
    document.getElementById('Birthday').textContent =title
    document.getElementById('info').textContent =text
    document.getElementById('link').href =link

}


function button(image , image2, image3, title, text, link){
    document.getElementById('image').src = image
    document.getElementById('image-2').src = image2
    document.getElementById('image-3').src = image3
    document.getElementById('link').href = link
    document.getElementById('Birthday').textContent = title
    document.getElementById('info').textContent = text
}