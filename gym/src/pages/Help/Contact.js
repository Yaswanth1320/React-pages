import './contact.css'
export const Conatct = () => {
  return (
    <div className="main">
        <div className="conatct">
        <h1>Contact Us</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, accusamus?</p>
            <form>
                <input type="text" name="name" className="name" placeholder='Enter Your Name' /><br />
                <input type="email" name="email" className="email" placeholder='Enter Your Email' /><br />
                <textarea name="message" className="msg" rows={5} cols={30} placeholder='Enter your message'></textarea><br />
                <button type="submit" className="btn">Submit</button>
            </form>
        </div>
    </div>
  )
}
