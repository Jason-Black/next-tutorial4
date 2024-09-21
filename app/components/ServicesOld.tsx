<section id="services" className="py-20 bg-gray-100">
<div className="container mx-auto px-4">
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="text-3xl font-bold mb-12 text-center"
  >
    Our Services
  </motion.h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {['UI/UX Design', 'Brand Identity', 'Web Development'].map((service, index) => (
      <motion.div
        key={service}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ scale: 1.05 }}
        className="bg-white p-6 rounded-lg shadow-lg"
      >
        <h3 className="text-xl font-semibold mb-4">{service}</h3>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <motion.a
          href="#"
          className="inline-flex items-center text-blue-600 hover:text-blue-800"
          whileHover={{ x: 5 }}
        >
          Learn More <ChevronRight className="ml-2 h-4 w-4" />
        </motion.a>
      </motion.div>
    ))}
  </div>
</div>
</section>