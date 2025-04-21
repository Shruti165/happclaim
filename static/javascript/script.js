// Get references to elements that might exist on different pages
const categorySelect = document.getElementById('category');
const subCategoriesDiv = document.getElementById('sub-categories');
const complaintTypeSelect = document.getElementById('complaint-type');

// Only add event listeners if the elements exist on the current page
if (categorySelect) {
    categorySelect.addEventListener('change', function() {
        if (subCategoriesDiv) {
            subCategoriesDiv.innerHTML = ''; // Clear previous sub-categories
        }
        if (complaintTypeSelect) {
            complaintTypeSelect.innerHTML = '<option value="">Select Complaint</option>'; // Clear previous complaints
        }

        if (this.value === 'travel') {
            if (subCategoriesDiv) {
                const subCategoryLabel = document.createElement('label');
                subCategoryLabel.textContent = 'Sub-Category:';
                const subCategorySelect = document.createElement('select');
                subCategorySelect.id = 'travel-sub-category';
                subCategorySelect.innerHTML = `
                    <option value="">Select Sub-Category</option>
                    <option value="hotel">Hotel</option>
                    <option value="travelpartner">Travel Partner</option>
                    <option value="airline">Airline</option>
                `;
                subCategoriesDiv.appendChild(subCategoryLabel);
                subCategoriesDiv.appendChild(subCategorySelect);

                subCategorySelect.addEventListener('change', function() {
                    if (complaintTypeSelect) {
                        complaintTypeSelect.innerHTML = '<option value="">Select Complaint</option>';
                        if (this.value === 'hotel') {
                            complaintTypeSelect.innerHTML += `
                                <option value="hotel-denied-checkin">Hotel denied check-in</option>
                                <option value="hotel-room-issues">Room not as described</option>
                            `;
                        } else if (this.value === 'travelpartner') {
                            complaintTypeSelect.innerHTML += `
                                <option value="travel-partner-refund">Travel partner denied refund</option>
                                <option value="travel-partner-misleading-info">Misleading information</option>
                            `;
                        } else if (this.value === 'airline') {
                            complaintTypeSelect.innerHTML += `
                                <option value="airline-flight-cancelled">Flight cancelled</option>
                                <option value="airline-lost-luggage">Lost luggage</option>
                            `;
                        }
                    }
                });
            }
        } else if (this.value === 'ecommerce') {
            if (subCategoriesDiv) {
                const subCategoryLabel = document.createElement('label');
                subCategoryLabel.textContent = 'Sub-Category:';
                const subCategorySelect = document.createElement('select');
                subCategorySelect.id = 'ecommerce-sub-category';
                subCategorySelect.innerHTML = `
                    <option value="">Select Sub-Category</option>
                    <option value="product">Product</option>
                    <option value="delivery">Delivery</option>
                    <option value="payment">Payment</option>
                `;
                subCategoriesDiv.appendChild(subCategoryLabel);
                subCategoriesDiv.appendChild(subCategorySelect);

                subCategorySelect.addEventListener('change', function() {
                    if (complaintTypeSelect) {
                        complaintTypeSelect.innerHTML = '<option value="">Select Complaint</option>';
                        if (this.value === 'product') {
                            complaintTypeSelect.innerHTML += `
                                <option value="product-not-as-described">Product not as described</option>
                                <option value="product-damaged">Damaged product</option>
                            `;
                        } else if (this.value === 'delivery') {
                            complaintTypeSelect.innerHTML += `
                                <option value="delivery-late">Late delivery</option>
                                <option value="delivery-wrong-item">Wrong item delivered</option>
                            `;
                        } else if (this.value === 'payment') {
                            complaintTypeSelect.innerHTML += `
                                <option value="payment-issue">Payment issue</option>
                                <option value="refund-not-received">Refund not received</option>
                            `;
                        }
                    }
                });
            }
        }
        // Add similar logic for other categories (healthcare, banking, insurance, realestate)
        else if (this.value === 'healthcare') {
            if (subCategoriesDiv) {
                const subCategoryLabel = document.createElement('label');
                subCategoryLabel.textContent = 'Sub-Category:';
                const subCategorySelect = document.createElement('select');
                subCategorySelect.id = 'healthcare-sub-category';
                subCategorySelect.innerHTML = `
                    <option value="">Select Sub-Category</option>
                    <option value="doctor">Doctor</option>
                    <option value="hospital">Hospital</option>
                    <option value="insurance">Insurance Claim</option>
                `;
                subCategoriesDiv.appendChild(subCategoryLabel);
                subCategoriesDiv.appendChild(subCategorySelect);

                subCategorySelect.addEventListener('change', function() {
                    if (complaintTypeSelect) {
                        complaintTypeSelect.innerHTML = '<option value="">Select Complaint</option>';
                        if (this.value === 'doctor') {
                            complaintTypeSelect.innerHTML += `
                                <option value="doctor-misdiagnosis">Misdiagnosis</option>
                                <option value="doctor-negligence">Negligence</option>
                            `;
                        } else if (this.value === 'hospital') {
                            complaintTypeSelect.innerHTML += `
                                <option value="hospital-billing-issues">Billing issues</option>
                                <option value="hospital-poor-care">Poor care</option>
                            `;
                        } else if (this.value === 'insurance') {
                            complaintTypeSelect.innerHTML += `
                                <option value="insurance-claim-denied">Claim denied</option>
                                <option value="insurance-delay">Claim processing delay</option>
                            `;
                        }
                    }
                });
            }
        } else if (this.value === 'banking') {
            if (subCategoriesDiv) {
                const subCategoryLabel = document.createElement('label');
                subCategoryLabel.textContent = 'Sub-Category:';
                const subCategorySelect = document.createElement('select');
                subCategorySelect.id = 'banking-sub-category';
                subCategorySelect.innerHTML = `
                    <option value="">Select Sub-Category</option