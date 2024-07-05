import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRandomPrompt } from '../utils';
import FormField from '../components/FormField';
import { preview } from '../assets';
import { Loader } from '../components';
import Navbar from '../components/Navbar';

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', prompt: '', photo: '' });
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  const generateImage = async () => {
    if (form.prompt) {
      try {
        setGeneratingImg(true);
        // console.log(`Sending request to generate image with prompt: ${form.prompt}`);
  
        const response = await fetch('http://localhost:8080/v1/api', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ prompt: form.prompt }),
        });
  
        console.log('Response status:', response.status);
  
        if (!response.ok) {
          const errorText = await response.text();
          // console.error('Response error text:', errorText);
          throw new Error('Failed to generate image');
        }
  
        const data = await response.json();
        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
      } catch (error) {
        // console.error('Error in generateImage:', error);
        alert('Failed to generate image. Please try again.');
      } finally {
        setGeneratingImg(false);
      }
    } else {
      alert('Please enter a prompt');
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(form.prompt && form.photo) {
      setLoading(true);

      try {
        const response = await fetch('http://localhost:8080/api/v1/post', {
          method: 'POST',
          headers: {
            'Content-Type' : 'application/json',
          },
          body: JSON.stringify(form)
        });
        await response.json();
        navigate('/');
      } catch (err) {
        alert('Failed to share post. Please try again.');
      } finally {
        setLoading(false);
      }
    } else {
      alert('Please enter a prompt and generate an image');
    }
  };

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <section id='create-post' className='max-w-7xl mx-auto sm:p-8 px-4 py-8 w-full'>
        <div>
          <h1 className='font-extrabold text-accent text-[32px]'>Create</h1>
          <p className='mt-2 text-accent text-[16px] max-w-[500px]'>
            Create imaginative and visually stunning images through ARTISTRY AI and share them with the community
          </p>
        </div>

        <form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
          <div className='flex flex-col gap-5'>
            <FormField
              labelName='Your name'
              type='text'
              name='name'
              placeholder='John Doe'
              value={form.name}
              handleChange={handleChange}
            />

            <FormField
              labelName='Prompt'
              type='text'
              name='prompt'
              placeholder='A plush toy robot sitting against a yellow wall'
              value={form.prompt}
              handleChange={handleChange}
              isSurpriseMe
              handleSurpriseMe={handleSurpriseMe}
            />

            <div className='relative bg-gray-50 border border-gray-300 text-accent text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 h-64 p-3 flex justify-center items-center'>
              {form.photo ? (
                <img src={form.photo} alt={form.prompt} className='w-full h-full object-contain' />
              ) : (
                <img src={preview} alt='preview' className='w-9/12 h-9/12 object-contain opacity-40' />
              )}

              {generatingImg && (
                <div className='absolute inset-0 z-0 flex justify-center items-center rounded-lg bg-[rgba(0,0,0,0.5)]'>
                  <Loader />
                </div>
              )}
            </div>
          </div>

          <div className='mt-5 flex gap-5'>
            <button
              type='button'
              onClick={generateImage}
              className='text-white bg-[#22C55E] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'
            >
              {generatingImg ? 'Generating...' : 'Generate'}
            </button>
          </div>

          <div className='mt-10'>
            <p className='mt-2 text-accent text-[14px]'>
              Once you have created the image you want, you can share it with others in the community
            </p>

            <button
              type='button'
              className='mt-3 text-white bg-[#4583e7] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'
            >
              {loading ? 'Sharing...' : 'Share with the community'}
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default CreatePost;
