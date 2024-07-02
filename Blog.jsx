import React from 'react'
import '../components/CSS/Blog.css'
import Comments from '../components/commentsSection/Comments'

const ShopCategory = () => {
  return (
    <div className='information'>
      <h1>AYURVEDA</h1>
      <hr />
      <div className='para'>
        Ayurveda has its foundations laid by the ancient schools of Hindu Philosophical teachings named Vaisheshika and the school of logic named as Nyaya. It is also related to the manifestation framework, well-known as Samkhya, and it was established in the same period when schools of Nyaya and Vaisheshika flourished.
      </div>
      
      <div className='para'>
        The Vaisheshika School preached about inferences and perceptions that should be obtained about a patient's pathological condition for treatment. Whereas, Nyaya school propagated its teachings on the basis that one should have an extensive knowledge of the patient's condition, and the disease condition before proceeding for treatment.
      </div>
      
      <div className='para'>
        The school of Vaisheshika, classifies the attributes of any object into six types: substance, particularity, activity, generality, inherence and quality called as Dravya, Vishesha, Karma, Samanya, Samavaya and Guna respectively, in Sanskrit language.Later, Vaisheshika and Nyaya schools worked together and jointly founded the nyāya–vaiśeṣika school.
      </div>
      
      <div className='para'>
        The nyāya–vaiśeṣika school, in the later years brought glory to the ancient knowledge and helped in disseminating the knowledge about Ayurveda. Even before these schools were established and also today, the origin of Ayurveda is considered to be divine, from the Hindu God, Brahma who is called as the creator of the universe. It is believed that the creator of the universe passed on this holistic knowledge of healing onto the sages for the well-being of mankind.
      </div>
      
      <div className='para'>
        From the sages the knowledge of traditional medicines was passed on to the disciples and then to the common man by various writings and oral narrations. The information about the healing properties of the herbs was composed in the form of poems, called “Shlokas”. These were used by sages to describe the use of medicinal plants. The Hindu system of healing is believed to be based on four eminent compilations of knowledge (Vedas) called as Yajur Veda, Rig Veda, Sam Veda, and Atharva Veda.
      </div>
      
      <div className='para'>
        The Rig Veda is the most well-known of all the four Vedas and describes 67 plants and 1028 Shlokas. The Atharva Veda and Yajur Veda describe 293 and 81 medicinally useful plants. The practice of Ayurveda is based upon the knowledge gained from these Vedas. The writings in Rig Veda and Atharva Veda are attributed to “Atreya” who is believed to have been conferred with this knowledge from Lord Indra, who initially received it from Lord Brahma.</div>
        
      <div className='para'>
        Agnivesha compiled the knowledge from the Vedas, and it was edited by Charaka and some other scholars and is presently called as “Charaka Samhita”. Charaka Samhita describes all aspects of Ayurvedic medicine and Sushruta Samhita describes the Science of Surgery.
      </div>
      
      <div className='para'>
        Both these legendary compilations are still used by practitioners of traditional medicine. These ancient texts are available in various translations and languages like Tibetan, Greek, Chinese, Arabic and Persian.12 There are several other allied minor compilations like Nighantu Granthas, Madhava Nidana and Bhava Prakasha from the contributions of various scholars, however Charaka Samhita is the most respected of all the records
      </div>

      <div className="comments">
        <h1>REVIEWS</h1>
        <hr />
        <Comments/>
      </div>
      
    </div>
  )
}

export default ShopCategory
