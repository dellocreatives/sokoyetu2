
import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  getDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy, 
  limit 
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '@/lib/firebase';

// Product interfaces
export interface Product {
  id?: string;
  title: string;
  description: string;
  price: number;
  category: string;
  images: string[];
  sellerId: string;
  sellerName: string;
  condition: 'new' | 'used' | 'refurbished';
  location: string;
  createdAt: Date;
  updatedAt: Date;
  status: 'active' | 'sold' | 'inactive';
}

export interface Rental {
  id?: string;
  title: string;
  description: string;
  pricePerDay: number;
  category: string;
  images: string[];
  ownerId: string;
  ownerName: string;
  location: string;
  availability: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Product services
export const addProduct = async (product: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>) => {
  try {
    const docRef = await addDoc(collection(db, 'products'), {
      ...product,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    return docRef.id;
  } catch (error) {
    console.error('Error adding product:', error);
    throw error;
  }
};

export const getProducts = async (categoryFilter?: string, limitCount?: number) => {
  try {
    let q = query(collection(db, 'products'), orderBy('createdAt', 'desc'));
    
    if (categoryFilter) {
      q = query(q, where('category', '==', categoryFilter));
    }
    
    if (limitCount) {
      q = query(q, limit(limitCount));
    }

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Product[];
  } catch (error) {
    console.error('Error getting products:', error);
    throw error;
  }
};

export const getProductById = async (id: string) => {
  try {
    const docRef = doc(db, 'products', id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as Product;
    } else {
      throw new Error('Product not found');
    }
  } catch (error) {
    console.error('Error getting product:', error);
    throw error;
  }
};

// Rental services
export const addRental = async (rental: Omit<Rental, 'id' | 'createdAt' | 'updatedAt'>) => {
  try {
    const docRef = await addDoc(collection(db, 'rentals'), {
      ...rental,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    return docRef.id;
  } catch (error) {
    console.error('Error adding rental:', error);
    throw error;
  }
};

export const getRentals = async (categoryFilter?: string, limitCount?: number) => {
  try {
    let q = query(collection(db, 'rentals'), orderBy('createdAt', 'desc'));
    
    if (categoryFilter) {
      q = query(q, where('category', '==', categoryFilter));
    }
    
    if (limitCount) {
      q = query(q, limit(limitCount));
    }

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Rental[];
  } catch (error) {
    console.error('Error getting rentals:', error);
    throw error;
  }
};

// Image upload service
export const uploadImage = async (file: File, path: string) => {
  try {
    const imageRef = ref(storage, `${path}/${Date.now()}_${file.name}`);
    const snapshot = await uploadBytes(imageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};

// User profile services
export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  phoneNumber?: string;
  location?: string;
  bio?: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

export const createUserProfile = async (profile: Omit<UserProfile, 'createdAt' | 'updatedAt'>) => {
  try {
    await addDoc(collection(db, 'users'), {
      ...profile,
      createdAt: new Date(),
      updatedAt: new Date()
    });
  } catch (error) {
    console.error('Error creating user profile:', error);
    throw error;
  }
};

export const getUserProfile = async (uid: string) => {
  try {
    const q = query(collection(db, 'users'), where('uid', '==', uid));
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
      const docData = querySnapshot.docs[0];
      return { 
        id: docData.id, 
        ...docData.data() 
      } as UserProfile & { id: string };
    } else {
      throw new Error('User profile not found');
    }
  } catch (error) {
    console.error('Error getting user profile:', error);
    throw error;
  }
};
