// Golf Club Website - Enhanced Script File
document.addEventListener('DOMContentLoaded', function() {
    // ============ Cursor Effects ============
    const cursor = document.getElementById('cursor');
    const cursorBlur = document.getElementById('cursor-blur');
    
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
        cursorBlur.style.left = e.clientX - 250 + 'px';
        cursorBlur.style.top = e.clientY - 250 + 'px';
    });

    // ============ Navigation ============
    const navItems = document.querySelectorAll('#nav h4');
    navItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(3)';
            cursor.style.backgroundColor = 'transparent';
            cursor.style.border = '1px solid #95c11e';
        });
        item.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.backgroundColor = '#95c11e';
            cursor.style.border = 'none';
        });
    });

    // Mobile Navigation Toggle
    const mobileNavToggle = document.getElementById('mobile-nav-toggle');
    const nav = document.getElementById('nav');
    
    mobileNavToggle.addEventListener('click', () => {
        nav.classList.toggle('show');
        mobileNavToggle.textContent = nav.classList.contains('show') ? '✕' : '☰';
    });

    // ============ Booking System Enhancements ============
    const bookingForm = document.querySelector('#booking form');
    const serviceSelect = document.querySelector('#booking select[name="service"]');
    const dateInput = document.querySelector('#booking input[name="date"]');
    const timeInput = document.querySelector('#booking input[name="time"]');
    const nameInput = document.querySelector('#booking input[name="name"]');
    const emailInput = document.querySelector('#booking input[name="email"]');
    const guestsInput = document.querySelector('#booking input[name="guests"]');
    const submitBtn = document.querySelector('#booking button[type="submit"]');

    // Initialize date picker with min date as today
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);

    // Create error message elements
    const createErrorElement = (input, message) => {
        // Remove existing error if any
        const existingError = input.nextElementSibling;
        if (existingError && existingError.classList.contains('error-message')) {
            existingError.remove();
        }

        const error = document.createElement('div');
        error.className = 'error-message';
        error.textContent = message;
        error.style.color = '#ff3333';
        error.style.fontSize = '0.8rem';
        error.style.marginTop = '5px';
        error.style.textAlign = 'left';
        error.style.width = '100%';
        input.parentNode.insertBefore(error, input.nextSibling);
        return error;
    };

    // Validate service selection
    serviceSelect.addEventListener('change', function() {
        if (serviceSelect.value === '') {
            createErrorElement(serviceSelect, 'Please select a service');
        } else {
            const error = serviceSelect.nextElementSibling;
            if (error && error.classList.contains('error-message')) {
                error.remove();
            }
        }
    });

    // Validate date (must be today or future)
    dateInput.addEventListener('change', function() {
        const selectedDate = new Date(dateInput.value);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        if (!dateInput.value) {
            createErrorElement(dateInput, 'Please select a date');
        } else if (selectedDate < today) {
            createErrorElement(dateInput, 'Date cannot be in the past');
        } else {
            const error = dateInput.nextElementSibling;
            if (error && error.classList.contains('error-message')) {
                error.remove();
            }
        }
    });

    // Validate time (must be during business hours)
    timeInput.addEventListener('change', function() {
        if (!timeInput.value) {
            createErrorElement(timeInput, 'Please select a time');
        } else {
            const hours = parseInt(timeInput.value.split(':')[0]);
            if (hours < 7 || hours > 22) {
                createErrorElement(timeInput, 'We are open from 7:00 AM to 10:00 PM');
            } else {
                const error = timeInput.nextElementSibling;
                if (error && error.classList.contains('error-message')) {
                    error.remove();
                }
            }
        }
    });

    // Validate name (minimum 3 characters)
    nameInput.addEventListener('blur', function() {
        if (!nameInput.value.trim()) {
            createErrorElement(nameInput, 'Name is required');
        } else if (nameInput.value.trim().length < 3) {
            createErrorElement(nameInput, 'Name must be at least 3 characters');
        } else {
            const error = nameInput.nextElementSibling;
            if (error && error.classList.contains('error-message')) {
                error.remove();
            }
        }
    });

    // Validate email format
    emailInput.addEventListener('blur', function() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailInput.value.trim()) {
            createErrorElement(emailInput, 'Email is required');
        } else if (!emailRegex.test(emailInput.value)) {
            createErrorElement(emailInput, 'Please enter a valid email');
        } else {
            const error = emailInput.nextElementSibling;
            if (error && error.classList.contains('error-message')) {
                error.remove();
            }
        }
    });

    // Validate number of guests
    guestsInput.addEventListener('change', function() {
        if (parseInt(guestsInput.value) < 1) {
            createErrorElement(guestsInput, 'Must have at least 1 guest');
        } else if (parseInt(guestsInput.value) > 10) {
            createErrorElement(guestsInput, 'Maximum 10 guests per booking');
        } else {
            const error = guestsInput.nextElementSibling;
            if (error && error.classList.contains('error-message')) {
                error.remove();
            }
        }
    });

    // Calculate price based on service and guests
    function calculatePrice() {
        if (!serviceSelect.value || !guestsInput.value) return 0;
        
        const prices = {
            'toptracer': 25,
            'lessons': 50,
            'adventure': 15,
            'membership': 0
        };
        
        const service = serviceSelect.value;
        const guests = parseInt(guestsInput.value) || 1;
        
        return prices[service] * (service === 'lessons' ? 1 : guests);
    }

    // Update price display when service or guests change
    serviceSelect.addEventListener('change', updatePriceDisplay);
    guestsInput.addEventListener('change', updatePriceDisplay);
    
    function updatePriceDisplay() {
        const priceDisplay = document.getElementById('price-display') || 
            document.createElement('div');
        
        if (!document.getElementById('price-display')) {
            priceDisplay.id = 'price-display';
            priceDisplay.style.marginTop = '15px';
            priceDisplay.style.fontWeight = 'bold';
            priceDisplay.style.fontSize = '1.2rem';
            priceDisplay.style.color = '#95c11e';
            submitBtn.parentNode.insertBefore(priceDisplay, submitBtn);
        }
        
        const price = calculatePrice();
        if (price > 0) {
            priceDisplay.textContent = `Total: £${price}`;
        } else {
            priceDisplay.textContent = '';
        }
    }

    // Form submission handler
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Trigger all validations
        serviceSelect.dispatchEvent(new Event('change'));
        dateInput.dispatchEvent(new Event('change'));
        timeInput.dispatchEvent(new Event('change'));
        nameInput.dispatchEvent(new Event('blur'));
        emailInput.dispatchEvent(new Event('blur'));
        guestsInput.dispatchEvent(new Event('change'));

        // Check if any errors exist
        const errors = document.querySelectorAll('.error-message');
        if (errors.length === 0) {
            // Show success message
            const successMsg = document.createElement('div');
            successMsg.textContent = 'Booking submitted successfully!';
            successMsg.style.color = '#95c11e';
            successMsg.style.fontWeight = 'bold';
            successMsg.style.marginTop = '20px';
            successMsg.style.textAlign = 'center';
            successMsg.style.fontSize = '1.2rem';
            
            // Remove existing success message if any
            const existingSuccess = bookingForm.querySelector('.success-message');
            if (existingSuccess) existingSuccess.remove();
            
            successMsg.classList.add('success-message');
            bookingForm.appendChild(successMsg);
            
            // Show booking summary
            const bookingSummary = `
                <div style="margin-top: 20px; text-align: left; background: #111; padding: 15px; border-radius: 8px;">
                    <h3 style="color: #95c11e; margin-bottom: 10px;">Booking Summary</h3>
                    <p><strong>Service:</strong> ${serviceSelect.options[serviceSelect.selectedIndex].text}</p>
                    <p><strong>Date:</strong> ${dateInput.value}</p>
                    <p><strong>Time:</strong> ${timeInput.value}</p>
                    <p><strong>Guests:</strong> ${guestsInput.value}</p>
                    <p><strong>Total:</strong> £${calculatePrice()}</p>
                </div>
            `;
            
            successMsg.insertAdjacentHTML('afterend', bookingSummary);
            
            // Reset form after 5 seconds
            setTimeout(() => {
                bookingForm.reset();
                successMsg.remove();
                document.querySelector('#booking .success-message + div').remove();
                updatePriceDisplay();
            }, 5000);
        }
    });

    // ============ Scroll to Top Button ============
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });

    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ============ Dark Mode Toggle ============
    const darkToggle = document.getElementById('darkToggle');
    darkToggle.addEventListener('change', function() {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', this.checked);
    });

    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'true') {
        darkToggle.checked = true;
        document.body.classList.add('dark-mode');
    }
});