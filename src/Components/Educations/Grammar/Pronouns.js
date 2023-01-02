import React from 'react';
import VBA from '../Excel/VBA/VBA';

const Pronouns = () => {
    return (
   <div className="header-top">
<section>
<h1 className='text-3xl text-center my-10'>  Pronoun </h1>
  <table className="table table-zebra w-full">

<thead>
  <tr>
    <th>Person</th>
    <th> Nominative Case </th>
    <th> Objective Case </th>
    <th> Pronominal Adjective</th>
    <th> Pronominal Pronoun</th>
  </tr>
</thead>
<tbody>
  
  <tr>
    <th>First Person | Singular Number</th>
    <td>I </td>
    <td>Me  </td>
    <td>My </td>
    <td>Mine</td>
  </tr>
  <tr>
    <th>First Person | Plural Number</th>
    <td> We</td>
    <td> Us </td>
    <td>Our</td>
    <td>Ours</td>
  </tr>
  <tr>
    <th>Second Person | Singular Number</th>
    <td>You </td>
    <td>You  </td>
    <td>Your </td>
    <td>Yours</td>
  </tr>
  <tr>
    <th>Second Person | Plural Number</th>
    <td>You </td>
    <td>You  </td>
    <td>Your </td>
    <td>Yours</td>
  </tr>
  <tr>
    <th>Third Person | Singular Number</th>
    <td> He/She/It/Rahim </td>
    <td> Him/her/Rahim </td>
    <td>His/her/Rahim's </td>
    <td>his ? / hers</td>
  </tr>
  <tr>
    <th>Third Person | Plural Number</th>
    <td> They</td>
    <td> Them</td>
    <td>Their</td>
    <td>Theirs</td>
  </tr>
  
 
</tbody>
</table>
</section>
<section className='my-50 text-lg'>
<h1 className='text-3xl text-center mt-24'> Uses of the above Pronouns </h1>

<h2 className='text-2xl my-2'>As Subject or Object</h2>
<p className='my-7'>If First person, Second person and Third person exit/remain/are available in a sentence, then order of pronoun should be </p>
<p className='mt-11'> If the meaning is assertive/ affirmative == Second Person, then third Person and finally first Person (231) <br />
If the meaning is guilty/negative = First Person then Second Person finally third Person (123) </p>

<p className='py-7'>Examples</p>
<ul>
    <li> <span className='text-teal-700 underline decoration-double'>You, he and I</span> have done the work successfully.</li>
    <li> <span className='text-red-700 underline decoration-double'>I, you and he </span> are guilty/responsible for the work/ job. </li>
    <li> The beautiful drawing of this statue has been done by <span className='text-red-700 underline decoration-double'> you, him and me.</span>  </li>
    <li> The nasty hacking has been done by <span className='text-red-700 underline decoration-double'> me, you and him.</span>  </li>
   
</ul>
<p className='pt-12'> Possessive pronoun + verb+ ing</p>
<p > Possessive pronoun + noun form of verb</p>
<p > Possessive pronoun + noun </p>
<ul className='py-7'>
    <li>We are waiting for <span className='text-teal-700 underline decoration-double'> </span> his/her/their <b><u>coming</u></b>.</li>
    <li>We are waiting for <span className='text-teal-700 underline decoration-double'> </span> his <b><u>arrival/departure</u></b>.</li>
    <li>We have seen <span className='text-teal-700 underline decoration-double'> </span> his <b><u> new dress/toys/cars</u></b>.</li>
</ul>
</section>
<section>
<h1 className='text-3xl my-7'>  Make a reflexive  form</h1>
  <p> If first person and second person: Possessive Adjective + self  </p>
<ul className='my-5'>
  <li>Myself</li>
  <li>Ourselves</li>
  <li> Yourself</li>
  <li>Yourselves</li>
 
</ul>
  <p> If Third person:  Object + self  </p>
<ul className='my-5'>
  <li>Himself</li>
  <li>Herself</li>
  <li>Themselves</li>
</ul>
</section>
<VBA></VBA>

   </div>
    );
};

export default Pronouns;