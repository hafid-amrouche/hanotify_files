import hashlib
def generate_token_from_id(id_value):
    # Convert the ID to a string if it's not already
    id_str = str(id_value)
    
    # Hash the ID using SHA-256
    hashed_id = hashlib.sha256(id_str.encode()).hexdigest()
    
    return hashed_id