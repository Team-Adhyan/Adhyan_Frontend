import { BookOpen } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">Adhyan</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Empowering students with quality education and comprehensive learning resources. Join hundreds of
              students who have achieved their academic goals with us.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#home" className="hover:text-blue-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#notes" className="hover:text-blue-400 transition-colors">
                  Notes
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-blue-400 transition-colors">
                  Team
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-300">
              <li>adhyan.core@gmail.com</li>
              <li>+91 89629 04119</li>
              <li>Jabalpur, Madhya Pradesh</li>
              <li>India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300 flex items-center justify-center">
            Made by Adhyan Team © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}
