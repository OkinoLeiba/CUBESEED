import Service from "../service-instance/Service";
import serviceStyles from "@/styles/serviceform.module.scss"


export default function ServiceForm() {
  return (
<<<<<<< HEAD:CUBESEED/src/component/forms/service-form.tsx
    <form className={serviceStyles.form} onSubmit={handleSubmit}>
=======
    <div className={serviceStyles.form}>
>>>>>>> 88ada8b46a3a24da564c0bfd01f663055ef77bc0:cubeseed_login/src/component/forms/ServiceForm.tsx
        <Service value={'Farmer'} />
        <Service value={'Service Provider'} />
        <Service value={'Input Seller'} />
        <Service value={'Investor'} />
        <Service value={'Direct-to-Farm Buyer'} />
        <Service value={'Processing Storage'} />
    </div>
  )
}
