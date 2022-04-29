import { ChangeEvent, useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'

const MailList = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = async () => {
    toast.loading('Loading...')

    try {
      await axios.post(
        `https://v1.nocodeapi.com/tipshot/mailchimp/LoYnRSRLHBxQPpeQ/members?list_id=fb2dc0c2e4&email_address=${email}&status=subscribed`
      )

      toast.dismiss()
      toast.success('Success!')
    } catch (err) {
      toast.dismiss()
      toast.error('Something went wrong.')
    }
  }

  return (
    <div className="mt-5 flex w-full max-w-xl">
      <input
        type="email"
        name="emailAddress"
        value={email}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
        className="mr-2 inline-block w-3/4 rounded bg-white p-3 text-sm text-gray-800 outline-0"
        placeholder="Enter your email address"
      />

      <button
        onClick={handleSubmit}
        className="inline-block h-full w-1/3 rounded bg-[#FF0066] py-3 text-sm text-white"
      >
        Add me to the wait list
      </button>
    </div>
  )
}

export default MailList
